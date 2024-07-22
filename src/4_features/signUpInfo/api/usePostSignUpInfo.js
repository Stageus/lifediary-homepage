import { useEffect } from "react";

import { useFetch, useCookie } from "@shared/hook";

export const usePostSignUpInfo = () => {
  const [signUpData, errorStatus, baseFetch] = useFetch();
  const { handleGetCookie } = useCookie();

  const postSignUpInfo = (profileImg, nickname, oauthGoogleId) => {
    baseFetch(
      "account",
      {
        method: "POST",
        data: { profileImg, nickname, oauthGoogleId },
      },
      handleGetCookie()
    );
  };

  useEffect(() => {
    if (errorStatus === 400) {
      return console.log("유효성 검사 실패");
    }

    if (errorStatus === 500) {
      return console.log("서버 에러");
    }
  }, [errorStatus]);

  return [postSignUpInfo, signUpData, errorStatus, baseFetch];
};
