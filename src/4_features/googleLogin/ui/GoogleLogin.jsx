import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { S } from "./style";
import { useGetRedirectUrl } from "../api/useGetRedirectUrl";
import { usePostToken } from "./usePostToken"; // 가정한 경로

export const GoogleLoginBtn = () => {
  const [redirectData] = useGetRedirectUrl();
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  usePostToken(response, redirectData, navigate);

  const handleLogin = useGoogleLogin({
    onSuccess: (response) => setResponse(response),
    onError: (error) => console.log(error),
  });

  return (
    <>
      <S.GoogleLoginBtn onClick={handleLogin}>
        <S.GoogleLogo />
      </S.GoogleLoginBtn>
    </>
  );
};
