import { S } from "./style";
import { DefaultBtn } from "@shared/ui";
import { CreateImg } from "@features/createImg";
import { CreateTag } from "@features/createTag";
import { CreateGrass } from "@features/createGrass";
import { CreatePublic } from "@features/createPublic";

export const DiaryCreateContent = () => {
  return (
    <>
      <S.DiaryCreateContainer>
        <S.ContentContainer>
          <S.ContentNameContainer>내용</S.ContentNameContainer>
          <S.textContent />
        </S.ContentContainer>
        <CreateImg />
        <CreateTag />
        <CreateGrass />
        <CreatePublic />
        <S.BtnContainer>
          <div>
            <DefaultBtn text="작성" type="disabled" />
          </div>
          <div>
            <DefaultBtn text="취소" />
          </div>
        </S.BtnContainer>
      </S.DiaryCreateContainer>
    </>
  );
};
