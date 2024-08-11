import { useState, useEffect, useRef } from "react";

import DefaultProfile from "@shared/assets/img/profile.png";

export const changeProfileInfo = () => {
  const [inputMessage, setInputMessage] = useState("");
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
      setButtonType("");
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleNicknameChange = (e) => {
    const inputValue = e.target.value;
    setNickname(inputValue);

    switch (true) {
      case inputValue.length > 20:
        setInputType("error");
        setInputMessage("닉네임은 최대 20자 입니다.");
        setButtonType("disabled");
        break;

      case inputValue.length < 3:
        setInputType("error");
        setInputMessage("닉네임은 최소 3자 이상입니다.");
        setButtonType("disabled");
        break;

      default:
        setInputType("");
        setButtonType("");
        setInputMessage("");
        setButtonType("");
        break;
    }
  };

  const handleUploadClick = () => {
    setNickname(nickname);
    setIsEdit(false);
  };

  const handleCancelClick = () => {
    setNickname(prevNickname);
    setProfileImg(prevProfileImg);
    setIsEdit(false);
  };

  return [inputMessage, imageInput, buttonType, inputType, nickname, profileImg, isEdit, handleChangeProfileImg, handleChangeImgBase, handleEditClick, handleNicknameChange, handleUploadClick, handleCancelClick];
};
