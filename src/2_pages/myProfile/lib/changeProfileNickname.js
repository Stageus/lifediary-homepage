import { useState, useEffect, useRef } from "react";

import DefaultProfile from "@shared/assets/imges/profile.png";

export const changeProfileNickname = () => {
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
    setIsEdit(true);
  };

  const handleChangeProfileImg = (e) => {
    imageInput.current.click();
  };

  const handleChangeImgBase = (e) => {
    let file = e.target.files[0];
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
