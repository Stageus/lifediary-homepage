import { useNavigate } from "react-router-dom";

import { S } from "./style";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <S.PageContainer>
      <S.LoginContainer>
        <S.Logo />
        <S.LoginBtn onClick={() => navigate("/Complain")}>
          <S.GoogleLogo />
        </S.LoginBtn>
      </S.LoginContainer>
    </S.PageContainer>
  );
};
