import { useEffect, useState } from "react";
import { useFetch } from "@shared/hook/useFetch";

export const useGetSearchContent = () => {
  const [searchData, setSearchData] = useState([]);
  const [data, errorStatus, baseFetch] = useFetch();

  // useEffect(() => {
  //   baseFetch("diary/search", {});
  //   setSearchData(data);

  //   if (errorStatus) {
  //     console.log("Error: ", errorStatus);
  //   }
  // }, [baseFetch]);

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
    ];

    setSearchData(tempData);

    if (errorStatus) {
      console.log("Error: ", errorStatus);
    }
  }, []);

  return searchData;
};
