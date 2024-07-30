import { S } from "./style";
import { useCheckTextLength } from "../lib/useCheckTextLength";

export const CreateText = () => {
  const [checkTextLength] = useCheckTextLength(500);

  return (
    <>
      <S.ContentContainer>
        <S.ContentNameContainer>내용</S.ContentNameContainer>
        <S.TextContent onChange={checkTextLength} placeholder="내용을 입력해주세요(최대 500자)" />
      </S.ContentContainer>
    </>
  );
};
