import { useState, useEffect, useRef } from "react";

import DefaultProfile from "@shared/assets/imges/profile.png";

export const changeProfileInfo = () => {
  const [profileImg, setProfileImg] = useState(DefaultProfile);
  const [prevProfileImg, setPrevProfileImg] = useState(profileImg);
  const [isEdit, setIsEdit] = useState(false);
  const [nickname, setNickname] = useState("고양이");
  const [prevNickname, setPrevNickname] = useState(nickname);
  const [inputType, setInputType] = useState("");
  const [buttonType, setButtonType] = useState("disabled");
  const imageInput = useRef(null);

  const handleEditClick = () => {
    setPrevNickname(nickname);
    setPrevProfileImg(profileImg);
    setIsEdit(true);
  };

  const handleChangeProfileImg = (e) => {
    imageInput.current.click();
  };

  const handleChangeImgBase = (e) => {
    let file = e.target.files[0];

    const allowedExtensions = ["jpg", "jpeg", "gif", "png"];

    if (file) {
      const fileExtension = file.name.split(".").pop().toLowerCase();

      if (!allowedExtensions.includes(fileExtension)) {
        alert("이미지는 jpg, jpeg, gif, png 형식만 지원합니다.");
        return;
      }
    }

    let reader = new FileReader();

    reader.onloadend = () => {
      setProfileImg(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleNicknameChange = (e) => {
    const inputValue = e.target.value;
    setNickname(inputValue);
  };

  useEffect(() => {
    if (nickname.length < 3) {
      setInputType("error");
      setButtonType("disabled");
    } else {
      setInputType("");
      setButtonType("");
    }
  }, [nickname]);

  const handleUploadClick = () => {
    setNickname(nickname);
    setIsEdit(false);
  };

  const handleCancelClick = () => {
    setNickname(prevNickname);
    setProfileImg(prevProfileImg);
    setIsEdit(false);
  };

  return [imageInput, buttonType, inputType, nickname, profileImg, isEdit, handleChangeProfileImg, handleChangeImgBase, handleEditClick, handleNicknameChange, handleUploadClick, handleCancelClick];
};
