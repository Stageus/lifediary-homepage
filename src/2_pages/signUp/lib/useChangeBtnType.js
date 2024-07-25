import { useState } from "react";

export const useChangeBtnType = (isNicknameValid, isProfileImgValid) => {
  const [btnType, setBtnType] = useState("disabled");

  const checkBtnType = () => {
    if (isProfileImgValid && isNicknameValid) {
      setBtnType("");
    }
  };

  return [btnType, checkBtnType];
};
