import { useEffect } from "react";

import { useFetch, useCookie } from "@shared/hook";

export const usePostDiaryInfo = (diaryIdx, imgContents, textContent, tags, isPublic, color) => {
  const [fetchData, baseFetch] = useFetch();
  const { handleGetCookie } = useCookie();

  const postDiaryInfo = () => {
    const diaryData = {
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
        data: diaryData,
      },
      handleGetCookie()
    );
  };

  useEffect(() => {
    postDiaryInfo();
  }, []);

  useEffect(() => {
    if (!fetchData) return;

    if (fetchData.status === 400) {
      return console.log("유효성 검사 실패");
    }

    if (fetchData.status === 401) {
      return console.log("잘못된 토큰입니다.");
    }

    if (fetchData.status === 500) {
      return console.log("서버 에러");
    }
  }, [fetchData]);

  return [postDiaryInfo];
};
