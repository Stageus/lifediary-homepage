import { useEffect } from "react";

import { useFetch, useCookie } from "@shared/hook";

export const useGetRedirectUrl = () => {
  const [redirecUrltData, errorStatus, baseFetch] = useFetch();
  const { handleGetCookie } = useCookie();

  const getRedirectUrl = () => {
    baseFetch("login/oauth/google", {}, handleGetCookie());
  };

  useEffect(() => {
    getRedirectUrl();
  }, []);

  useEffect(() => {
    if (errorStatus === 500) {
      console.log("서버 에러");
    }
  }, [errorStatus]);

  return [redirecUrltData, errorStatus, baseFetch];
};
