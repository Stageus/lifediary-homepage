import { S } from "./style";
import { TagInput } from "@shared/ui";

export const CreateTag = () => {
  return (
    <>
      <S.ContentContainer>
        <S.ContentNameContainer>태그</S.ContentNameContainer>
        <TagInput placeholder="#태그 입력(최대 3개)" />
      </S.ContentContainer>
    </>
  );
};
