import { useState, useRef } from "react";

export const useChangeImgBase = () => {
  const imageInputRef = useRef(null);
  const [profileImg, setProfileImg] = useState(null);
  const [profileImgMessage, setProfileImgMessage] = useState("프로필을 선택해 주세요(jpg, jpeg, gif, png)");
  const [isProfileImgValid, setIsProfileImgValid] = useState(false);

  const handleChangeImgBase = (e) => {
    const file = e.target.files[0];
    const validExtensions = ["jpg", "jpeg", "gif", "png"];
    const fileExtension = file?.name.split(".").pop().toLowerCase();

    switch (true) {
      case !file:
        setIsProfileImgValid(false);
        setProfileImgMessage("파일을 선택해 주세요");
        setProfileImg(null);
        break;

      case !validExtensions.includes(fileExtension):
        setProfileImgMessage("파일 확장자가 올바르지 않습니다");
        setIsProfileImgValid(false);
        setProfileImg(null);
        break;

      case file.size > 10 * 1024 * 1024:
        setProfileImgMessage("파일 크기가 10MB 이하여야 합니다");
        setIsProfileImgValid(false);
        setProfileImg(null);
        break;

      default:
        setProfileImg(file);
        setIsProfileImgValid(true);
        setProfileImgMessage("");
    }
  };

  return [handleChangeImgBase, profileImg, profileImgMessage, isProfileImgValid, imageInputRef];
};
