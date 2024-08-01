import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useFetch, useCookie } from "@shared/hook";

export const usePostSignUpInfo = () => {
  const navigate = useNavigate();
  const [fetchData, baseFetch] = useFetch();
  const { handleGetCookie } = useCookie();

  const postSignUpInfo = (profileImg, nickname) => {
    const formData = new FormData();
    formData.append("profileImg", profileImg);
    formData.append("nickname", nickname);
    formData.append("oauthGoogleId", oauthGooglId);

    baseFetch(
      "account",
      {
        method: "POST",
        data: formData,
      },
      handleGetCookie()
    );
  };

  useEffect(() => {
    if (!fetchData) return;

    if (fetchData.status === 200) {
      alert("회원가입에 성공했습니다!");
      navigate("/");
    }

    if (fetchData?.status === 400) {
      return console.log("유효성 검사 실패");
    }

    if (fetchData?.status === 500) {
      return console.log("서버 에러");
    }
  }, [fetchData]);

  return [postSignUpInfo];
};
