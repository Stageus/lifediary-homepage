import { useState, useEffect } from "react";
import { useFetch, useCookie } from "@shared/hook";

export const usePostSignUpInfo = () => {
  const [signUpData, status, baseFetch] = useFetch();
  const { handleGetCookie } = useCookie();

  const postSignUpInfo = (profileImg, nickname, oauthGoogleId) => {
    const formData = new FormData();
    formData.append("profileImg", profileImg);
    formData.append("nickname", nickname);
    formData.append("oauthGoogleId", oauthGoogleId);

    baseFetch(
      "account",
      {
        method: "POST",
        body: formData,
      },
      handleGetCookie()
    );
  };

  useEffect(() => {
    postSignUpInfo();
  }, [signUpData]);

  useEffect(() => {
    if (status === 400) {
      return console.log("유효성 검사 실패");
    }
    if (status === 500) {
      return console.log("서버 에러");
    }
  }, [status]);

  return [signUpData, status, baseFetch];
};
