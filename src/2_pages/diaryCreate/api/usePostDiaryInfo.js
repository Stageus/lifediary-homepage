import { useEffect } from "react";

import { useFetch, useCookie } from "@shared/hook";

export const usePostDiaryInfo = (diaryIdx, imgContents, textContent, tags, isPublic, color) => {
  const [DiaryData, status, baseFetch] = useFetch();
  const { handleGetCookie } = useCookie();

  const postDiaryInfo = () => {
    const fetchData = {
      imgContents,
      textContent,
      tags,
      isPublic,
      color,
    };

    baseFetch(
      `diaryUpload/${diaryIdx}`,
      {
        method: "POST",
        data: fetchData,
      },
      handleGetCookie()
    );
  };

  useEffect(() => {
    postDiaryInfo();
  }, [DiaryData]);

  useEffect(() => {
    if (status === 400) {
      return console.log("유효성 검사 실패");
    }

    if (status === 401) {
      return console.log("잘못된 토큰입니다.");
    }

    if (status === 500) {
      return console.log("서버 에러");
    }
  }, [status]);

  return [DiaryData, status, baseFetch];
};
