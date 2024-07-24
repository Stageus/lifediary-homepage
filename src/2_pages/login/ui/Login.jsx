import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { S } from "./style";
import { useGetRedirectUrl } from "../api/useGetRedirectUrl";
import { useGetAccountExist } from "../api/useGetAccountExist";

export const Login = () => {
  const navigate = useNavigate();
  const [getRedirectUrl] = useGetRedirectUrl();
  const [getAccountExist] = useGetAccountExist();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      getAccountExist();
    }
  }, []);

  return (
    <S.PageContainer>
      <S.LoginContainer>
        <S.Logo onClick={() => navigate("/")} />
        <S.GoogleLoginBtn onClick={getRedirectUrl}>
          <S.GoogleLogo />
        </S.GoogleLoginBtn>
      </S.LoginContainer>
    </S.PageContainer>
  );
};
