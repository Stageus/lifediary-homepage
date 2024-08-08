// Slice
import { S } from "./style";
import { useGetAccountExist } from "../api/useGetAccountExist";
import { useGetGoogleUrl } from "../api/useGetGoogleUrl";
// Layer
import { useRoute } from "@shared/hook";
import logo from "@shared/assets/img/logo.png";


export const Login = () => {

  const { homeRoute } = useRoute();
  const [ onClickGetUrl ] = useGetGoogleUrl();
  const _ = useGetAccountExist();

  return (
    <S.PageContainer>
      <S.LoginContainer>
        <S.Logo
          src={logo}
         onClick={ homeRoute } />
        <S.GoogleLoginBtn onClick={onClickGetUrl}>
          <S.GoogleLogo />
        </S.GoogleLoginBtn>
      </S.LoginContainer>
    </S.PageContainer>
  );
};
