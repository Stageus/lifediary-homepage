import { S } from "./style";
import { DefaultBtn, TagInput, Icon } from "@shared/ui";

export const DiaryCreateInfo = () => {
  return (
    <>
      <S.DiaryCreateContainer>
        <S.ContentContainer>
          <p>내용</p>
          <S.textContent />
        </S.ContentContainer>
        <S.ContentContainer>
          <p>이미지</p>
          <DefaultBtn text="선택(최대 3개)" />
        </S.ContentContainer>
        <S.ContentContainer>
          <p>태그</p>
          <TagInput />
        </S.ContentContainer>
        <S.ContentContainer>
          <p>잔디(필수)</p>
          <DefaultBtn text="선택" />
          <DefaultBtn text="랜덤배정" />
        </S.ContentContainer>
        <S.ContentContainer>
          <p>공개</p>
          <Icon type="calender" />
        </S.ContentContainer>
        <S.BtnContainer>
          <DefaultBtn text="작성" />
          <DefaultBtn text="취소" />
        </S.BtnContainer>
      </S.DiaryCreateContainer>
      ;
    </>
  );
};
