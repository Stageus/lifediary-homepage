import { useCallback } from "react";

export const handleChangeProfileImg = (imageInput) =>
  useCallback(() => {
    imageInput.current.click();
  }, [imageInput]);

export const handleChangeImgBase = (setProfileImg) => (e) => {
  let file = e.target.files[0];
  let reader = new FileReader();

  reader.onloadend = () => {
    setProfileImg(reader.result);
  };

  if (file) {
    reader.readAsDataURL(file);
  }
};
