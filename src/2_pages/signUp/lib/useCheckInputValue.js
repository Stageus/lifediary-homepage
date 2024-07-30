import { useState, useEffect } from "react";

// import { useGetDuplication } from "../api/useGetDuplication";

export const useCheckInputValue = () => {
  const [nickname, setNickname] = useState("");
  const [inputType, setInputType] = useState("");
  const [btnMessage, setBtnMessage] = useState("");
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  // const [duplicationData, status, getDuplication] = useGetDuplication();

  // useEffect(() => {
  //   if (nickname !== "") {
  //     getDuplication();
  //   }
  // }, [nickname]);

  // useEffect(() => {
  //   if (status === 200 && duplicationData?.isDuplicated) {
  //     setInputType("error");
  //     setBtnMessage("닉네임이 중복됩니다.");
  //     setIsNicknameValid(false);
  //   }
  // }, [duplicationData, status]);

  const handleCheckInputValue = (e) => {
    const value = e.target.value;
    setNickname(value);

    switch (true) {
      case value.length > 20:
        setInputType("error");
        setBtnMessage("닉네임은 최대 20자 입니다.");
        setIsNicknameValid(false);
        break;
      case value.includes(" ") || /[~!@#$%^&*()_+{}|:"<>?`\-=[\]\\;',./]/.test(value):
        setInputType("error");
        setBtnMessage("빈칸이나 특수기호는 사용할 수 없습니다.");
        setIsNicknameValid(false);
        break;
      default:
        setInputType("");
        setBtnMessage("");
        setIsNicknameValid(true);
        break;
    }
  };

  return [handleCheckInputValue, nickname, inputType, btnMessage, isNicknameValid];
};
