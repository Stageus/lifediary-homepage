import { useEffect, useState } from "react";

export const useChangeBtnType = (isNicknameValid, isProfileImgValid) => {
  const [btnType, setBtnType] = useState("disabled");

  const checkBtnType = () => {
    if (isProfileImgValid && isNicknameValid) {
      setBtnType("");
    }
  };

  useEffect(() => {
    checkBtnType();
  }, [isNicknameValid, isProfileImgValid]);

  return [btnType, checkBtnType];
};
