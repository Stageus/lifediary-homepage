import { S } from "./style";

import { TagInput } from "@widgets/tagInput";

export const CreateTag = () => {
  return (
    <>
      <S.ContentContainer>
        <S.ContentNameContainer>태그</S.ContentNameContainer>
        <TagInput placeholder="입력 후 엔터를 누르면 태그 자동 입력 (최대 20자, 3개)" />
      </S.ContentContainer>
    </>
  );
};
