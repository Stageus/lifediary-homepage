import { useState } from "react";

import { S } from "./style";
import { Icon } from "@shared/ui/icon/Icon";

export const TagInput = (props) => {
  const { fontSize, placeholder, onTagsChange } = props;
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isComposing, setIsComposing] = useState(false); // 한글 입력 중인지 여부를 추적하는 상태 추가

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g, "");
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
      onTagsChange([...tags, inputValue]);
      setInputValue("");
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
    onTagsChange(tags.filter((_, i) => i !== index));
  };

  return (
    <S.TagInputContainer>
      {tags.map((tag, index) => (
        <S.TagList key={index} onClick={() => removeTag(index)}>
          #{tag}
          <Icon type="cancel" color="red" />
        </S.TagList>
      ))}
      <S.TagInput type="text" fontSize={fontSize} placeholder={tags.length >= 3 ? "" : placeholder} value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} onCompositionStart={handleCompositionStart} onCompositionEnd={handleCompositionEnd} disabled={tags.length >= 3} />
    </S.TagInputContainer>
  );
};
