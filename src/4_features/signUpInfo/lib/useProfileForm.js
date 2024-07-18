import { useState, useRef, useEffect } from "react";

import Profile from "@shared/assets/imges/profile.png";

export const useProfileForm = () => {
  const [profileImg, setProfileImg] = useState(Profile);
  const [nickname, setNickname] = useState("");
  const [inputType, setInputType] = useState("");
  const imageInput = useRef(null);
  const [profileImgMessage, setProfileImgMessage] = useState("프로필을 선택해 주세요(jpg, jpeg, gif, png)");
  const [btnMessage, setBtnMessage] = useState("");
  const [btnType, setBtnType] = useState("disabled");
  const [isProfileImgValid, setIsProfileImgValid] = useState(false);
  const [isNicknameValid, setIsNicknameValid] = useState(false);

  useEffect(() => {
    if (isProfileImgValid && isNicknameValid) {
      setBtnType("");
    } else {
      setBtnType("disabled");
    }
  }, [isProfileImgValid, isNicknameValid]);

  const handleChangeImgBase = (e) => {
    const file = e.target.files[0];
    const validExtensions = ["jpg", "jpeg", "gif", "png"];
    const fileExtension = file.name.split(".").pop().toLowerCase();
    const maxSize = 10 * 1024 * 1024;

    if (!e.target.files.length) {
      setIsProfileImgValid(false);
      setProfileImgMessage("파일을 선택해 주세요");
      return;
    }

    if (!file) {
      setIsProfileImgValid(false);
      return;
    }

    if (!validExtensions.includes(fileExtension)) {
      setProfileImgMessage("파일 확장자가 올바르지 않습니다");
      setIsProfileImgValid(false);
      return;
    }

    if (file.size > maxSize) {
      setProfileImgMessage("파일 크기가 10MB 이하여야 합니다");
      setIsProfileImgValid(false);
      return;
    }

    if (file) {
      setBtnType("");
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImg(reader.result);
    };
    reader.readAsDataURL(file);

    if (file && validExtensions.includes(fileExtension) && file.size <= maxSize) {
      setIsProfileImgValid(true);
    }
  };

  const handleChangeProfileImg = () => {
    imageInput.current.click();
  };

  const handleCheckInputValue = (e) => {
    const value = e.target.value;
    setNickname(value);
    if (value.length > 20) {
      setInputType("error");
      setBtnMessage("닉네임은 최대 20자 입니다.");
      setIsNicknameValid(false);
    } else {
      setInputType("");
      setBtnMessage("");
      setIsNicknameValid(true);
    }
  };

  return {
    profileImg,
    nickname,
    inputType,
    imageInput,
    profileImgMessage,
    btnMessage,
    btnType,
    isProfileImgValid,
    isNicknameValid,
    handleChangeImgBase,
    handleChangeProfileImg,
    handleCheckInputValue,
  };
};
