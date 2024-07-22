import { useState, useEffect } from "react";

import { useGetDuplication } from "../api/useGetDuplication";

export const useCheckInputValue = () => {
  const [nickname, setNickname] = useState("");
  const [inputType, setInputType] = useState("");
  const [btnMessage, setBtnMessage] = useState("");
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [duplicationData, status, baseFetch] = useGetDuplication();

  useEffect(() => {
    if (nickname) {
      baseFetch("account/nickname/duplication");
    }
  }, [nickname, baseFetch]);

  useEffect(() => {
    if (status === 200 && duplicationData?.isDuplicated) {
      setInputType("error");
      setBtnMessage("닉네임이 중복됩니다.");
      setIsNicknameValid(false);
    }
  }, [duplicationData, status]);

  const handleCheckInputValue = (e) => {
    const value = e.target.value;
    setNickname(value);

    if (value.length > 20) {
      setInputType("error");
      setBtnMessage("닉네임은 최대 20자 입니다.");
      setIsNicknameValid(false);
    }

    if (value && value.length <= 20) {
      setInputType("");
      setBtnMessage("");
      setIsNicknameValid(true);
    }
  };

  return [handleCheckInputValue, nickname, inputType, btnMessage, isNicknameValid];
};
