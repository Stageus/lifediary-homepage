import { useRef } from "react";

export const useCheckTextLength = () => {
  const lengthLimit = 500;
  const textRef = useRef("");

  const checkTextLength = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= lengthLimit) {
      textRef.current = inputText;
    } else {
      alert(`입력 가능한 최대 글자수는 ${lengthLimit}자입니다.`);
      const trimmedText = inputText.slice(0, lengthLimit);
      textRef.current = trimmedText;
      e.target.value = trimmedText; // 입력 필드의 값을 최대 글자수로 제한
    }
  };

  return [checkTextLength, textRef];
};
