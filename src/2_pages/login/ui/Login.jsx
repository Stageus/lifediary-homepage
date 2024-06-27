import { useNavigate } from "react-router-dom";

import { S } from "./style";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <S.PageContainer>
      <S.LoginContainer>
        <S.Logo />
        {/* 임시로 회원가입페이지로 즉시 이동하도록 경로설정, 추후 수정예정 */}
        <S.LoginBtn onClick={() => navigate("/SignUp")}>
          <S.GoogleLogo />
        </S.LoginBtn>
      </S.LoginContainer>
    </S.PageContainer>
  );
};
