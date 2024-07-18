import { useEffect } from "react";

import { useFetch } from "@shared/hook";
import { useCookie } from "@shared/hook";

export const useGetDiaryInfo = (diaryIdx) => {
  const [diaryData, status, baseFetch] = useFetch();
  const { handleGetCookie } = useCookie();

  const fetchDiaryData = () => {
    baseFetch(`diaryUpload/${diaryIdx}`, {}, handleGetCookie());
  };

  useEffect(() => {
    fetchDiaryData();
  }, [diaryData]);

  useEffect(() => {
    if (status === 400) {
      return console.log("유효성 검사 실패");
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
