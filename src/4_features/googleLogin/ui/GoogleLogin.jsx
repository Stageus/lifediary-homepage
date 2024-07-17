import { S } from "./style";
import { useGetRedirectUrl } from "../api/useGetRedirectUrl";

export const GoogleLoginBtn = () => {
  const [redirectUrlData] = useGetRedirectUrl();

  const handleLogin = () => {
    if (redirectUrlData) {
      window.location.href = redirectUrlData.redirectUrl;
    }
  };

  return (
    <>
      <S.GoogleLoginBtn onClick={handleLogin}>
        <S.GoogleLogo />
      </S.GoogleLoginBtn>
    </>
  );
};
