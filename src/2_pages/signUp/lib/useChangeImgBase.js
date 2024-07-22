import { useState } from "react";

import Profile from "@shared/assets/imges/profile.png";

export const useChangeImgBase = () => {
  const [profileImg, setProfileImg] = useState(Profile);
  const [profileImgMessage, setProfileImgMessage] = useState("프로필을 선택해 주세요(jpg, jpeg, gif, png)");
  const [isProfileImgValid, setIsProfileImgValid] = useState(false);

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

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImg(reader.result);
    };
    reader.readAsDataURL(file);

    if (file && validExtensions.includes(fileExtension) && file.size <= maxSize) {
      setProfileImg(file);
      setIsProfileImgValid(true);
    }
  };

  return [handleChangeImgBase, profileImg, profileImgMessage, isProfileImgValid];
};
