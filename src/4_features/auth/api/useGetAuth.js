import { useFetch, useCookie } from "@shared/hook";
import { useEffect, useState } from "react";

export const useGetAuth = () => {
  const [fetchData, baseFetch] = useFetch();
  const { handleGetCookie } = useCookie();
  const [userInfo, setUserInfo] = useState(null);

  const mapper = (resData) => {
    const permissionType = {
      user: 0,
      admin: 1,
    };

    return {
      permission: permissionType[resData.permission],
    };
  };

  const getAuth = () => {
    // baseFetch("auth", {}, handleGetCookie());
  };

  useEffect(() => {
    getAuth();
  }, []);

  useEffect(() => {
    if (!fetchData) return;

    switch (fetchData.status) {
      case 200:
        setUserInfo(mapper(fetchData.data));
        break;
      case 401:
        // admin이 아니면 버튼을 감추는걸로
        console.log("토큰이 잘못되거나 없는경우");
        break;
      case 500:
        // 500 페이지로 이동하는걸로
        break;
      default:
        console.log("예상하지 못한경우");
    }
  }, [fetchData]);

  return [userInfo];
};
