import { S } from "./style";
import { DefaultBtn, TagInput, Icon } from "@shared/ui";

export const DiaryCreateInfo = () => {
  return (
    <>
      <S.DiaryCreateContainer>
        <S.ContentContainer>
          <S.ContentNameContainer>내용</S.ContentNameContainer>
          <S.textContent />
        </S.ContentContainer>
        <S.ContentContainer>
          <S.ContentNameContainer>이미지</S.ContentNameContainer>
          <div>
            <DefaultBtn text="선택(최대 3개)" />
          </div>
        </S.ContentContainer>
        <S.ContentContainer>
          <S.ContentNameContainer>태그</S.ContentNameContainer>
          <TagInput />
        </S.ContentContainer>
        <S.ContentContainer>
          <S.ContentNameContainer>잔디(필수)</S.ContentNameContainer>
          <div>
            <DefaultBtn text="선택" />
          </div>
          <div>
            <DefaultBtn text="랜덤배정" />
          </div>
        </S.ContentContainer>
        <S.ContentContainer>
          <S.ContentNameContainer>공개</S.ContentNameContainer>
          <Icon type="calendar" />
        </S.ContentContainer>
        <S.BtnContainer>
          <div>
            <DefaultBtn text="작성" type="disabled" />
          </div>
          <div>
            <DefaultBtn text="취소" />
          </div>
        </S.BtnContainer>
      </S.DiaryCreateContainer>
      ;
    </>
  );
};
