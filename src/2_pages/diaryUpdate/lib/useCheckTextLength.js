import { useState } from "react";

export const useCheckTextLength = (lengthLimit) => {
  const [textContent, setTextContent] = useState("");

  const checkTextLength = (e) => {
    const inputText = e.target.value;
    if (inputText.length < lengthLimit) {
      setTextContent(inputText);
    } else {
      alert(`입력 가능한 최대 글자수는 ${lengthLimit}자입니다.`);
      const trimmedText = inputText.slice(0, lengthLimit);
      setTextContent(trimmedText);
      e.target.value = trimmedText; // 입력 필드의 값을 최대 글자수로 제한
    }
  };

  return [checkTextLength, textContent, setTextContent];
};
