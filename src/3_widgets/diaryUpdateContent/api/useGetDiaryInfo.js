import { useEffect } from "react";

import { useFetch } from "@shared/hook";
import { useCookie } from "@shared/hook";

export const useGetDiaryInfo = (diaryIdx) => {
  const [diaryData, errorStatus, baseFetch] = useFetch();
  const { handleGetCookie } = useCookie();

  useEffect(() => {
    const fetchDiaryData = () => {
      baseFetch(`diary/${diaryIdx}`, {}, handleGetCookie());
      if (errorStatus) {
        console.log("errorStatus: ", errorStatus);
      }
    };

    fetchDiaryData();
  }, [diaryIdx]);

  return [diaryData, errorStatus];
};
