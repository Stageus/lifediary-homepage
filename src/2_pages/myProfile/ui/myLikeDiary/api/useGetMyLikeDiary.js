// Npm
import { useState, useEffect, useRef } from "react";
// Layer
import { useFetch, useRoute, useCookie } from "@shared/hook";
import { useMessage } from "@shared/store";
import { parseTime } from "@shared/util";

export const useGetMyLikeDiary = () => {

  const [ fetchData, baseFetch ] = useFetch();
  const { cookieGet } = useCookie();
  const { errorRoute, loginRoute } = useRoute();
  const setMessage = useMessage((state) => state.setMessage);

  const pageNumRef = useRef( 1 );
  const [ diaryList, setDiaryList ] = useState( [] );
  const [ isEnd, setIsEnd ] = useState(false); 
  const [ isLoading, setIsLoading ] = useState( false );

  const mapper = (resData) => {
    const mapperData = resData?.map((diary) => ({
      idx: diary.idx,
      thumbnail: diary.thumbnail,
      createdAt: parseTime(diary.createdAt),
    }));

    return mapperData;
  };

  const getMyLikeDiary = () => {
    if ( isEnd ) return;
    setIsLoading( true );  
    baseFetch(`diary/mypage/like?page=${pageNumRef.current}`, {}, cookieGet("token"));
  };

useEffect(() => {
    if (!fetchData) return;

    const mapperData = mapper(fetchData.data);
    setIsLoading(false);

    switch (fetchData.status) {
      case 200:
        pageNumRef.current = pageNumRef.current + 1;
        setDiaryList([...diaryList, ...mapperData]);
        break;

      case 400:
        setMessage("날짜 형식이 잘못되었습니다.");
        break;

      case 401:
        setMessage("로그인이 필요한 서비스입니다.", loginRoute);
        break;

      case 404:
        setIsEnd(true);
        break;

      case 500:
        errorRoute(500, "서버에러");
        break;
    }
  }, [fetchData]);

  return [ isLoading, diaryList, getMyLikeDiary ];
};
