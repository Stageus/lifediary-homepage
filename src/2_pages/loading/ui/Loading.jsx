import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { S } from "./style";

export const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search); //쿼리 문자열 부분을 파싱해 객체 생성
    const authCode = urlParams.get("code");

    const fetchUserData = async (authCode) => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/login/oauth/google/redirect?code=${authCode}`);
        if (!response.ok) {
          throw new Error("서버 에러");
        }

        const data = await response.json();

        if (data.isAccountExist === false) {
          navigate("/SignUp", { state: { userData: data } });
        } else {
          navigate("/", { state: { userData: data } });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData(authCode);
  }, [navigate]);

  return (
    <>
      <S.LoadingContent />
    </>
  );
};
