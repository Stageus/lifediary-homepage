import { S } from "./style";
import { useGetMineDiary } from "../api/useGetMineDiary";
import { useDivideList } from "../lib/useDivideList";

import defaultDiary from "@shared/assets/imges/defaultDiary.jpg";

export const MyDiaryList = () => {
  const [filteredPosts, formatDate] = useDivideList();

  return (
    <>
      <S.DiaryCardContainer>
        {filteredPosts.map((post) => (
          <S.DiaryCard key={post.id}>
            <S.ThumbnailContainer>
              <S.PublicSignContainer>{!post.isPublic ? <S.NameHighlight>비공개</S.NameHighlight> : "공개"}</S.PublicSignContainer>
              <img src={defaultDiary} alt="Diary thumbnail" />
            </S.ThumbnailContainer>
            <S.DateContainer>{formatDate(post.date)}</S.DateContainer>
          </S.DiaryCard>
        ))}
      </S.DiaryCardContainer>
    </>
  );
};
