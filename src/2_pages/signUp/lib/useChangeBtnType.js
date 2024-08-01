import { useEffect, useState } from "react";

export const useChangeBtnType = (isNicknameValid, isProfileImgValid) => {
  const [btnType, setBtnType] = useState("disabled");

  const checkBtnType = () => {
    switch (true) {
      case isProfileImgValid && isNicknameValid:
        setBtnType("");
        break;
      case !isProfileImgValid || !isNicknameValid:
        setBtnType("disabled");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    checkBtnType();
  }, [isNicknameValid, isProfileImgValid]);

  return [btnType, checkBtnType];
};
