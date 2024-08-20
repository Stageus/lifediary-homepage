// Npm
import { useState, useEffect } from "react";
// Layer
import { useFetch, useRoute, useCookie } from "@shared/hook";
import { useMessage } from "@shared/store";
import { parseTime } from "@shared/util";

export const useGetMyLikeDiary = () => {

  const [ fetchData, baseFetch ] = useFetch();
  const { errorRoute, loginRoute } = useRoute();
  const setMessage = useMessage((state) => state.setMessage);
  const { cookieGet } = useCookie();
  const [ pageNum, setPageNum ] = useState(1);
  const [ diaryList, setDiaryList ] = useState( [] );
  const [ isEnd, setIsEnd ] = useState(false); 
  const [ isLoading, setIsLoading ] = useState( false );

  const mapper = (resData) => {
    const mapperData = resData.map((diary) => ({
      idx: diary.idx,
      thumbnail: diary.thumbnail,
      createdAt: parseTime(diary.createdAt),
    }));

    return mapperData;
  };

  const getMyLikeDiary = () => {
    // 데이터의 끝이라면 더이상 요청하지 않는다.
    if ( isEnd ) return;
    baseFetch(`diary/mypage/like?page=${pageNum}`, {}, cookieGet("token"));
    // 요청을 한다면 로딩 상태
    setIsLoading( true );  
  };

  useEffect(() => {
      getMyLikeDiary();
  }, []);

useEffect(() => {
    if (!fetchData) return;

    setIsLoading(false);
    switch (fetchData.status) {
      case 200:

        // 일기데이터를 기존 데이와 합침
        setDiaryList([...diaryList, ...mapper(fetchData.data)]);

        if ( fetchData.data.length >= 10 ){
            setPageNum( pageNum + 1 );
        }else{
            setIsEnd( true );
        }

        break;

      case 400:
        setMessage("날짜 형식이 잘못되었습니다.");
        break;

      case 401:
        setMessage("로그인이 필요한 서비스입니다.", loginRoute);
        break;

      case 404:
        if (pageNum === 1) {
          setDiaryList([]);
        }
        // 데이터의 끝을 알림
        setIsEnd(true);
        break;

      case 500:
        errorRoute(500, "서버에러");
        break;
    }
  }, [fetchData]);

  return [ isEnd, isLoading, diaryList, getMyLikeDiary ];
};
