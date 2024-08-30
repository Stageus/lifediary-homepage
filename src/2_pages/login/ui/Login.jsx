// Slice
import { S } from "./style";
import { useGetAccountExist } from "../api/useGetAccountExist";
import { useGetGoogleUrl } from "../api/useGetGoogleUrl";
import googleLogo from "../assets/googleLogo.png";
// Layer
import { useRoute } from "@shared/hook";
import logo from "@shared/assets/img/logo.png";


export const Login = () => {

  const { homeRoute } = useRoute();
  const [ onClickGetUrl ] = useGetGoogleUrl();
  const _ = useGetAccountExist();

  return (
    <S.login>
      <S.innerBox>

        <S.logoArea onClick={homeRoute}>
          <span>{"LifeDiary"}</span>
        </S.logoArea>

        <S.googleLogin onClick={onClickGetUrl}>
          <img src={googleLogo}/>
          <button>{"Google 로그인"}</button>
        </S.googleLogin>

      </S.innerBox>
    </S.login>
  );
};
