import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch, useRoute, useCookie } from "@shared/hook";
import { useMessage } from "@shared/store";

export const useGetAccountInfo = () => {

  const [fetchData, baseFetch] = useFetch();
  const { cookieGet } = useCookie();
  const { errorRoute, backRoute } = useRoute();
  const { accountIdx } = useParams();
  const setMessage = useMessage((state) => state.setMessage);
  const [accountInfo, setAccountInfo] = useState(null);

  const mapper = ( resData ) => {
    return {
      nickname: resData.nickname,
      profileImg: resData.profileImg,
      subscribeCnt: resData.subscribeCnt,
      diaryCnt: resData.diaryCnt,
      isSubscribed: resData.isSubscribed,
      accountIdx: +accountIdx,
    };
  };

  const getAccountInfo = () => {
    baseFetch(`account/${accountIdx}`, {}, cookieGet("token"));
  };

  useEffect(() => {
    getAccountInfo();
  },[]);

  useEffect(() => {
    if (!fetchData) return;

    switch (fetchData.status) {
      case 200:
        setAccountInfo(mapper(fetchData.data));
        break;

      case 400:
        setMessage("잠시후에 다시시도해주세요", backRoute);
        break;

      case 404:
        setMessage("해당유저는 존재하지 않습니다.", backRoute);
        break;

      case 500:
        errorRoute(500, "서버에러");
        break;
    }
  }, [fetchData]);

  return [ accountInfo ];
};
