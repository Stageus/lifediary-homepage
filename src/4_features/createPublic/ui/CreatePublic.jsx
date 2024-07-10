import { S } from "./style";
import { Icon } from "@shared/ui";

export const CreatePublic = () => {
  return (
    <>
      <S.ContentContainer>
        <S.ContentNameContainer>공개</S.ContentNameContainer>
        <Icon type="calendar" />
      </S.ContentContainer>
    </>
  );
};
