import { useEffect, useState } from "react";
import { useFetch } from "@shared/hook/useFetch";

export const useGetSearchContent = () => {
  const [fetchData, setFetchData] = useState([]);
  // const [fetchData, baseFetch] = useFetch();

  // const getSearchContent = () => {
  //   baseFetch("diary/search", {});
  // };

  // useEffect(() => {
  //   getSearchContent();
  // }, [fetchData]);

  // useEffect(() => {
  //   if (status === 400) {
  //     return console.log("유효성 검사 실패");
  //   }

  //   if (status === 404) {
  //     return console.log("데이터가 없습니다.");
  //   }

  //   if (status === 500) {
  //     return console.log("서버 에러");
  //   }
  // }, [fetchData]);

  //임시데이터로 테스트하는 코드
  useEffect(() => {
    const tempData = [
      {
        idx: 1,
        thumbnailImg: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        textContent: "오늘의 일기...",
        nickname: "사용자1",
        profileImg: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__480.png",
        likeCnt: 10,
        createdAt: "2023-04-01",
        tags: ["일상", "일기테스트"],
      },
      {
        idx: 2,
        thumbnailImg: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        textContent: "오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...",
        nickname: "사용자2",
        profileImg: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__480.png",
        likeCnt: 30,
        createdAt: "2023-04-11",
        tags: ["일상222", "일기테스트222"],
      },
      {
        idx: 3,
        thumbnailImg: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        textContent: "오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...",
        nickname: "사용자2",
        profileImg: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__480.png",
        likeCnt: 30,
        createdAt: "2023-04-11",
        tags: ["일상222", "일기테스트222"],
      },
      {
        idx: 4,
        thumbnailImg: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        textContent: "오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...",
        nickname: "사용자2",
        profileImg: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__480.png",
        likeCnt: 30,
        createdAt: "2023-04-11",
        tags: ["일상222", "일기테스트222"],
      },
      {
        idx: 5,
        thumbnailImg: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        textContent: "오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...오늘의 두번째 일기...",
        nickname: "사용자2",
        profileImg: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__480.png",
        likeCnt: 30,
        createdAt: "2023-04-11",
        tags: ["일상222", "일기테스트222"],
      },
    ];

    setFetchData(tempData);
  }, []);

  return [fetchData];
};
