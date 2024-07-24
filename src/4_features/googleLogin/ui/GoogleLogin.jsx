import { S } from "./style";
import { useGetRedirectUrl } from "../api/useGetRedirectUrl";

export const GoogleLoginBtn = () => {
  const [fetchData] = useGetRedirectUrl();

  const handleLogin = () => {
    window.location.href = fetchData.redirectUrl;
  };

  return (
    <>
      <S.GoogleLoginBtn onClick={handleLogin}>
        <S.GoogleLogo />
      </S.GoogleLoginBtn>
    </>
  );
};
