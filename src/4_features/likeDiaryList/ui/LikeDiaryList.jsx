import { useState, useEffect } from "react";

import { S } from "./style";
// import { useGetMineDiary } from "../api/useGetMineDiary";

import defaultDiary from "@shared/assets/imges/defaultDiary.jpg";

//예시 데이터
const posts = [
  { id: 1, date: new Date(2024, 6, 14), isPublic: false },
  { id: 2, date: new Date(2024, 6, 15), isPublic: true },
  { id: 3, date: new Date(2024, 6, 16), isPublic: false },
  { id: 4, date: new Date(2024, 6, 16), isPublic: false },
  { id: 5, date: new Date(2024, 6, 16), isPublic: false },
  { id: 6, date: new Date(2024, 6, 16), isPublic: false },
  { id: 7, date: new Date(2024, 6, 16), isPublic: false },
];

export const LikeDiaryList = () => {
  // const [mineDiaryData, status, baseFetch] = useGetMineDiary();
  // useEffect(() => {
  //   baseFetch("diary/mypage/mine", {}, handleGetCookie());
  // }, [mineDiaryData]);

  //예시 데이터 불러오기
  const [filteredPosts, setFilteredPosts] = useState([]);
  useEffect(() => {
    //   if (!startDate && !endDate) {
    setFilteredPosts(posts);
    //   }
  }, []);

  const formatDate = (date) => date.toLocaleDateString("ko-KR");

  return (
    <>
      <S.DiaryCardContainer>
        {filteredPosts.map((post) => (
          <S.DiaryCard key={post.id}>
            <S.ThumbnailContainer>
              <img src={defaultDiary} alt="Diary thumbnail" />
            </S.ThumbnailContainer>
            <S.DateContainer>{formatDate(post.date)}</S.DateContainer>
          </S.DiaryCard>
        ))}
      </S.DiaryCardContainer>
    </>
  );
};
