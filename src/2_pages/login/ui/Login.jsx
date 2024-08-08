// Slice
import { S } from "./style";
import { useGetAccountExist } from "../api/useGetAccountExist";
import { useGetGoogleUrl } from "../api/useGetGoogleUrl";
// Layer
import { useRoute } from "@shared/hook";


export const Login = () => {

  const { homeRoute } = useRoute();
  const [ onClickGetUrl ] = useGetGoogleUrl();
  const _ = useGetAccountExist();

  return (
    <S.PageContainer>
      <S.LoginContainer>
        <S.Logo onClick={ homeRoute } />
        <S.GoogleLoginBtn onClick={onClickGetUrl}>
          <S.GoogleLogo />
        </S.GoogleLoginBtn>
      </S.LoginContainer>
    </S.PageContainer>
  );
};
