import { S } from "./style";
import { useGetMineDiary } from "../api/useGetMineDiary";
import { useDivideList } from "../lib/useDivideList";

import defaultDiary from "@shared/assets/imges/defaultDiary.jpg";

export const UserDiaryList = () => {
  const [filteredPosts] = useDivideList();

  return (
    <>
      <S.DiaryCardContainer>
        {filteredPosts.map((post) => (
          <S.DiaryCard key={post.id}>
            <S.ThumbnailContainer>
              <img src={defaultDiary} alt="Diary thumbnail" />
            </S.ThumbnailContainer>
            <S.DateContainer>{post.date.toLocaleDateString("ko-KR")}</S.DateContainer>
          </S.DiaryCard>
        ))}
      </S.DiaryCardContainer>
    </>
  );
};
