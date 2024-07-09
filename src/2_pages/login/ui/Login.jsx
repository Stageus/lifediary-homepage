import { useNavigate } from "react-router-dom";

import { S } from "./style";
import { GoogleLoginBtn } from "@features/googleLogin/ui/GoogleLogin";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <S.PageContainer>
      <S.LoginContainer>
        <S.Logo onClick={() => navigate("/")} />
        {/* 임시로 회원가입페이지로 즉시 이동하도록 경로설정, 추후 수정예정 */}
        <GoogleLoginBtn />
      </S.LoginContainer>
    </S.PageContainer>
  );
};
