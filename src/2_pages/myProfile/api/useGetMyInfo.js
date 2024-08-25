// Npm
import { useEffect, useState } from "react";
// Layer
import { useFetch, useCookie } from "@shared/hook";
import { useMessage } from "@shared/store";

export const useGetMyInfo = () => {

  const [fetchData, baseFetch] = useFetch();
  const { cookieGet } = useCookie();
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
        const mapperData = mapper(fetchData.data);
        setMyInfo(mapperData);
        break;

      case 401:
        break;

      case 500:
        setMessage("서버오류로 인해 정보를 불러 올수없습니다.");
        break;
    }
  }, [fetchData]);

  return [myInfo];
};
