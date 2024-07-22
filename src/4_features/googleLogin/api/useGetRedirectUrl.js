import { useEffect } from "react";

import { useFetch, useCookie } from "@shared/hook";

export const useGetRedirectUrl = () => {
  const [redirecUrltData, status, baseFetch] = useFetch();
  const { handleSetCookie } = useCookie();

  const getRedirectUrl = () => {
    baseFetch("login/oauth/google", {}, handleSetCookie());
  };

  useEffect(() => {
    getRedirectUrl();
  }, []);

  useEffect(() => {
    if (status === 200) {
      console.log("구글 로그인 페이지로 이동");
    }
    if (status === 500) {
      console.log("서버 에러");
    }
  }, [status]);

  return [redirecUrltData, status, baseFetch];
};
