import { useNavigate } from "react-router-dom";

import { S } from "./style";
import { useGetRedirectUrl } from "../api/useGetRedirectUrl";
import { useIsUser } from "../api/useIsUser";

export const Login = () => {
  const navigate = useNavigate();

  const [getRedirectUrl] = useGetRedirectUrl();
  const [isUser] = useIsUser();

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
