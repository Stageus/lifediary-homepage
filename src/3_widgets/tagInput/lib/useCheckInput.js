import { useState } from "react";

export const useCheckInput = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isComposing, setIsComposing] = useState(false); // 한글 입력 중인지 여부를 추적하는 상태 추가

  const handleInputChange = (e) => {
    let value = e.target.value.replace(/[\s\{\}\[\]\/?,;:|\)*~`!^\-+<>@\#$%&\\=\(\'\"\]]/g, "");

    if (value.length > 20) {
      alert("태그는 최대 20자로 입력해주세요.");
      value = value.slice(0, 20); // 최대 20자로 제한
      setInputValue(value);
    }

    setInputValue(value);
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = () => {
    setIsComposing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isComposing && inputValue && !tags.includes(inputValue) && tags.length < 3) {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return [tags, inputValue, handleInputChange, handleCompositionStart, handleCompositionEnd, handleKeyDown, removeTag];
};
