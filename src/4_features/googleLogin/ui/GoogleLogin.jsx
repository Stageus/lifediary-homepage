import { S } from "./style";

import { useGetRedirectUrl } from "../api/useGetRedirectUrl";

export const GoogleLogin = () => {
  const [redirectData, ,] = useGetRedirectUrl();

  const handleNaviLogin = () => {
    window.location.href = redirectData;
  };

  return (
    <S.LoginBtn onClick={handleNaviLogin}>
      <S.GoogleLogo />
    </S.LoginBtn>
  );
};
