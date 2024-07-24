import { useNavigate, useSearchParams } from "react-router-dom";
import { useFetch, useCookie } from "@shared/hook";
import { useEffect } from "react";

export const useGetAccountExist = () => {
  const [fetchData, baseFetch] = useFetch();
  const { handleSetCookie } = useCookie();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const getAccountExist = () => {
    baseFetch(`account/login/oauth/google/redirect?${searchParams}`);
  };

  useEffect(() => {
    if (searchParams) {
      getAccountExist();
    }
  }, []);

  useEffect(() => {
    if (!fetchData) return;

    if (fetchData.status === 200) {
      // 계정이 없다면
      if (!fetchData.data.isAccountExist) return navigate("/signup");
      // 계정이 있다면
      handleSetCookie("myCookie", fetchData.data.token);
      navigate("/");
    }
  }, [fetchData]);

  return [getAccountExist];
};
