import { useNavigate, useSearchParams } from "react-router-dom";
import { useFetch, useCookie } from "@shared/hook";
import { useEffect } from "react";

export const useGetAccountExist = () => {
  const [fetchData, baseFetch] = useFetch();
  const { handleSetCookie } = useCookie();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  const getAccountExist = () => {
    baseFetch(`account/login/oauth/google/redirect?code=${code}`);
  };

  useEffect(() => {
    if (!fetchData) return;

    if (fetchData.status === 200) {
      //계정이 없다면
      if (!fetchData.data.isAccountExist) {
        const oauthGoogleId = fetchData.data.oauthGoogleId;
        navigate("/signup", { state: { oauthGoogleId } });
      } else {
        //계정이 있다면
        handleSetCookie("myCookie", fetchData.data.token);
        navigate("/");
      }
    }
  }, [fetchData]);

  return [getAccountExist];
};
