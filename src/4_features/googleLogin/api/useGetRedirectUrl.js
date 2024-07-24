import { useEffect } from "react";

import { useFetch, useCookie } from "@shared/hook";

export const useGetRedirectUrl = () => {
  const [fetchData, baseFetch] = useFetch();
  const { handleSetCookie } = useCookie();

  const getRedirectUrl = () => {
    baseFetch("login/oauth/google", {}, handleSetCookie());
  };

  useEffect(() => {
    getRedirectUrl();
  }, []);

  useEffect(() => {
    if (fetchData?.status === 500) {
      console.log("서버 에러");
    }
  }, [fetchData]);

  return [fetchData, baseFetch];
};
