import { useState } from "react";

export const useChangeImgBase = () => {
  const [profileImg, setProfileImg] = useState(null);
  const [profileImgMessage, setProfileImgMessage] = useState("프로필을 선택해 주세요(jpg, jpeg, gif, png)");
  const [isProfileImgValid, setIsProfileImgValid] = useState(false);

  const handleChangeImgBase = (e) => {
    const file = e.target.files[0];
    const validExtensions = ["jpg", "jpeg", "gif", "png"];
    const fileExtension = file?.name.split(".").pop().toLowerCase();
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!file) {
      setIsProfileImgValid(false);
      setProfileImgMessage("파일을 선택해 주세요");
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

    // 파일 객체를 직접 저장
    setProfileImg(file);
    setIsProfileImgValid(true);
  };

  return [handleChangeImgBase, profileImg, profileImgMessage, isProfileImgValid];
};
