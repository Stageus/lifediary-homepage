import { useEffect } from "react";

import { useFetch, useCookie } from "@shared/hook";

export const useGetDuplication = () => {
  const [fetchData, baseFetch] = useFetch();
  const { handleGetCookie } = useCookie();

  const getDuplication = () => {
    baseFetch("account/nickname/duplication", {}, handleGetCookie());
  };

  useEffect(() => {
    getDuplication();
  }, []);

  useEffect(() => {
    if (fetchData?.status === 400) {
      return console.log("유효성 검사 실패");
    }
    if (fetchData?.status === 500) {
      return console.log("서버 에러");
    }
  }, [fetchData]);

  return [getDuplication];
};
