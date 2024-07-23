import { useEffect } from "react";

import { useFetch, useCookie } from "@shared/hook";

export const useGetRedirectUrl = () => {
  const [fetchData, status, baseFetch] = useFetch();
  const { handleSetCookie } = useCookie();

  useEffect(() => {
    baseFetch("login/oauth/google", {}, handleSetCookie());
  }, [fetchData]);

  useEffect(() => {
    if (status === 500) {
      console.log("서버 에러");
    }
  }, [status]);

  return [fetchData, status, baseFetch];
};
