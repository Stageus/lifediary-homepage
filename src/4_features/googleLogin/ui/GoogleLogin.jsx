import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

import { S } from "./style";
import { useGetRedirectUrl } from "../api/useGetRedirectUrl";
import { useFetch } from "@shared/hook/useFetch";

export const GoogleLoginBtn = () => {
  const [redirectData] = useGetRedirectUrl();
  const [response, setResponse] = useState(null);
  const [responseData, errorStatus, baseFetch] = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (response) {
        const { credential } = response;
        await baseFetch(redirectData.result.redirectUrl, {
          method: "POST",
          headers: {
            token: credential,
          },
        });

        if (errorStatus) {
          console.log(errorStatus);
        } else {
          console.log(responseData);
          navigate("/home");
        }
      }
    };

    fetchData();
  }, [response, redirectData, baseFetch, errorStatus, navigate, responseData]); //의존성 배열에 들어갈 목록에 관해 아직 확실하지 않음

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
