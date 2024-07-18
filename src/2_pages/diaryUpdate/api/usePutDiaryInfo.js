import { useEffect } from "react";

import { useFetch, useCookie } from "@shared/hook";

export const usePutDiaryInfo = (diaryIdx, imgContents, textContent, tags, isPublic, color) => {
  const [diaryData, status, baseFetch] = useFetch();
  const { handleGetCookie } = useCookie();

  const putDiaryInfo = () => {
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
        method: "PUT",
        data: fetchData,
      },
      handleGetCookie()
    );
  };

  useEffect(() => {
    putDiaryInfo();
  }, [diaryData]);

  useEffect(() => {
    if (status === 400) {
      return console.log("유효성 검사 실패");
    }

    if (status === 401) {
      return console.log("잘못된 토큰입니다.");
    }

    if (status === 403) {
      return console.log("권한이 없습니다.");
    }

    if (status === 404) {
      return console.log("일기를 찾을 수 없습니다.");
    }

    if (status === 500) {
      return console.log("서버 에러");
    }
  }, [status]);

  return [diaryData, status, baseFetch];
};
