import { useEffect } from "react";
import { useFetch, useCookie } from "@shared/hook";

export const useGetAccount = () => {
  const [fetchData, baseFetch] = useFetch();
  const { handleGetCookie } = useCookie();

  useEffect(() => {
    baseFetch("account", {}, handleGetCookie());
  }, []);

  useEffect(() => {
    if (!fetchData) return;

    if (fetchData.status === 200) {
      return console.log("성공");
    }
    if (fetchData.status === 401) {
      return console.log("토큰에러");
    }
    if (fetchData.status === 500) {
      return console.log("서버에러");
    }
  }, [fetchData]);

  return [fetchData, baseFetch];
};
