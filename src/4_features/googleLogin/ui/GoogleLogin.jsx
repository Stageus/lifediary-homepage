import { S } from "./style";
import { useGetRedirectUrl } from "../api/useGetRedirectUrl";

export const GoogleLoginBtn = () => {
  const [getRedirectUrl] = useGetRedirectUrl();

  return (
    <>
      <S.GoogleLoginBtn onClick={getRedirectUrl}>
        <S.GoogleLogo />
      </S.GoogleLoginBtn>
    </>
  );
};
