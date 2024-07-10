import { S } from "./style";
import { DefaultBtn } from "@shared/ui";

export const CreateGrass = () => {
  return (
    <>
      <S.ContentContainer>
        <S.ContentNameContainer>잔디(필수)</S.ContentNameContainer>
        <div>
          <DefaultBtn text="선택" />
        </div>
        <div>
          <DefaultBtn text="랜덤배정" />
        </div>
      </S.ContentContainer>
    </>
  );
};
