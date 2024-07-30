import { useState } from "react";

import { S } from "./style";
import { useCheckInput } from "../lib/useCheckInput";

import { Icon } from "@shared/ui/icon/Icon";

export const TagInput = (props) => {
  const { fontSize, placeholder } = props;
  const [tags, inputValue, handleInputChange, handleCompositionStart, handleCompositionEnd, handleKeyDown, removeTag] = useCheckInput();

  return (
    <>
      <S.TagInputContainer>
        {tags.map((tag, index) => (
          <S.TagList key={index} onClick={() => removeTag(index)}>
            #{tag}
            <Icon type="cancel" color="red" />
          </S.TagList>
        ))}
        <S.TagInput type="text" fontSize={fontSize} placeholder={tags.length >= 3 ? "" : placeholder} value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} onCompositionStart={handleCompositionStart} onCompositionEnd={handleCompositionEnd} disabled={tags.length >= 3} />
      </S.TagInputContainer>
    </>
  );
};
