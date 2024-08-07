import { S } from "./style";
import { useCheckTextLength } from "../lib/useCheckTextLength";
import { useEffect, useRef } from "react";

export const CreateText = () => {
  const [checkTextLength, textRef] = useCheckTextLength();
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = textRef.current;
    }
  }, [textRef.current]);

  return (
    <>
      <S.ContentContainer>
        <S.ContentNameContainer>내용</S.ContentNameContainer>
        <S.TextContent onBlur={checkTextLength} ref={inputRef} placeholder="내용을 입력해주세요(최대 500자)" />
      </S.ContentContainer>
    </>
  );
};
