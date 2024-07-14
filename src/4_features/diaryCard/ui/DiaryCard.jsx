import { S } from "./style";
import defaultDiary from "@shared/assets/imges/defaultDiary.jpg";

export const DiaryCard = () => {
  return (
    <>
      <S.DiaryCardContainer>
        <S.ThumbnailContainer>
          <S.PublicSignContainer>비공개</S.PublicSignContainer>
          <img src={defaultDiary} />
        </S.ThumbnailContainer>
        <S.DateContainer>2024.06.02</S.DateContainer>
      </S.DiaryCardContainer>
    </>
  );
};
