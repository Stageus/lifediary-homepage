// Npm
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Layer
import { useFetch, useRoute, useCookie } from "@shared/hook";
import { useMessage } from "@shared/store";

export const useGetAccountInfo = () => {

  const [fetchData, baseFetch] = useFetch();
  const { cookieGet } = useCookie();
  const { errorRoute, backRoute } = useRoute();
  const setMessage = useMessage((state) => state.setMessage);

  const { accountIdx } = useParams();
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
  },[accountIdx]);

  useEffect(() => {
    if (!fetchData) return;

    switch (fetchData.status) {
      case 200:
        setAccountInfo(mapper(fetchData.data));
        break;

      case 400:
        setMessage("400 예상하지못한 상황이 발생했습니다\n잠시후에 다시시도해주세요");
        break;

      case 404:
        setMessage("존재하지 않는 회원입니다.", backRoute);
        break;

      case 500:
        errorRoute(500, "서버에러: 유저페이지 정보를 가져올수없습니다");
        break;
    }
  }, [fetchData]);

  return [ accountInfo ];
};
