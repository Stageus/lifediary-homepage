import { S } from "./style";

import defaultDiary from "@shared/assets/imges/defaultDiary.jpg";

const posts = [
  { id: 1, date: new Date(2024, 6, 14), isPublic: false },
  { id: 2, date: new Date(2024, 6, 15), isPublic: true },
  { id: 3, date: new Date(2024, 6, 16), isPublic: false },
  { id: 4, date: new Date(2024, 6, 16), isPublic: false },
  { id: 5, date: new Date(2024, 6, 16), isPublic: true },
  { id: 6, date: new Date(2024, 6, 16), isPublic: false },
  { id: 7, date: new Date(2024, 6, 16), isPublic: true },
];

export const LikeDiaryList = () => {
  const publicPosts = posts.filter((post) => post.isPublic);

  return (
    <>
      <S.DiaryCardContainer>
        {publicPosts.map((post) => (
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
