import { useEffect, useState } from "react";
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { useMessage } from "@shared/store";

export const useGetMyInfo = () => {
  const [fetchData, baseFetch] = useFetch();
  const { cookieGet } = useCookie();
  const { errorRoute, backRoute } = useRoute();
  const setMessage = useMessage((state) => state.setMessage);
  const [myInfo, setMyInfo] = useState(null);

  const mapper = (resData) => {
    return {
      nickname: resData.nickname,
      profileImg: resData.profileImg,
      subscribeCnt: resData.subscribeCnt,
      diaryCnt: resData.diaryCnt,
    };
  };

  const getMyInfo = () => {
    baseFetch("account", {}, cookieGet("token"));
  };

  useEffect(() => {
    getMyInfo();
  }, []);

  useEffect(() => {
    if (!fetchData) return;

    switch (fetchData.status) {
      case 200:
        setMyInfo(mapper(fetchData.data));
        break;

      case 401:
        setMessage("잘못된 접근입니다", backRoute);
        break;

      case 500:
        errorRoute(500, "서버에러");
        break;
    }
  }, [fetchData]);

  return [myInfo];
};
