import { useState, useEffect } from "react";

import { useFetch, useCookie } from "@shared/hook";

export const useGetDuplication = () => {
  const [duplicationData, status, baseFetch] = useFetch();
  const { handleGetCookie } = useCookie();

  const getDuplication = () => {
    baseFetch("account/nickname/duplication", {}, handleGetCookie());
  };

  useEffect(() => {
    getDuplication();
  }, [duplicationData]);

  useEffect(() => {
    if (status === 400) {
      return console.log("유효성 검사 실패");
    }
    if (status === 500) {
      return console.log("서버 에러");
    }
  }, [status]);

  return [duplicationData, status, baseFetch];
};
