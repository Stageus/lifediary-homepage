import { S } from "./style";
import { useFetch } from "@shared/hook/useFetch";
import { useEffect } from "react";

export const GoogleLogin = () => {
  const [data, errorStatus, baseFetch] = useFetch();

  const firstFetch = () => {
    baseFetch("firstCommu");
  };

  useEffect(() => {
    firstFetch();

    if (errorStatus) {
      console.log(`Error: ${errorStatus}`);
      return;
    }
  }, []);

  const handleNaviLogin = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID}&redirect_uri=${data.result.redirectUrl}&response_type=token&scope=email profile`;
  };

  return (
    <S.LoginBtn onClick={handleNaviLogin}>
      <S.GoogleLogo />
    </S.LoginBtn>
  );
};
