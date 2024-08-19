// Npm
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// Layer
import { useFetch, useoute, useCookie } from "@shared/hook";
import { useMessage } from "@shared/store";
import { dateValidation } from "@shared/consts/validation";
import { parseTime } from "@shared/util";

export const useGetMyDiary = ( diaryList, setDiaryList, isEnd, setIsEnd, setIsLoading ) => {

  const [ fetchData, baseFetch ] = useFetch();
  const { errorRoute, loginRoute } = useRoute();
  const setMessage = useMessage((state) => state.setMessage);
  const { cookieGet } = useCookie();
  const [ pageNum, setPageNum ] = useState(1);
  const [ searchParams ] = useSearchParams();

  const mapper = (resData) => {
    const mapperData = resData.map((diary) => ({
      idx: diary.idx,
      thumbnail: diary.thumbnail,
      isPublic: diary.isPublic,
      createdAt: parseTime(diary.createdAt),
    }));

    return mapperData;
  };

  const getMyDiary = () => {
    // 데이터의 끝이라면 더이상 요청하지 않는다.
    if ( isEnd ) return;

    const beginDate = parseTime(searchParams.get("beginDate"));
    const endDate = parseTime(searchParams.get("endDate"));
    
    if (beginDate && !dateValidation(beginDate))
      return setMessage("시작날짜 형식이 잘못되었습니다.");
    if (endDate && !dateValidation(endDate))
      return setMessage("종료날짜 형식이 잘못되었습니다.");
    
    const baseQuery = `page=${pageNum}`;
    const startQuery = beginDate ? `beginDate=${beginDate}&` : "";
    const endQuery = endDate ? `endDate=${endDate}&` : "";
    const query = startQuery + endQuery + baseQuery;
    baseFetch(`diary/mypage/mine?${query}`, {}, cookieGet("token"));
    // 요청을 한다면 로딩 상태
    setIsLoading( true );  
  };

  
  useEffect(() => {

      setPageNum(1);
      setDiaryList([]);
      setIsEnd(false);

  }, [searchParams]);

  useEffect(() => {
    if (!fetchData) return;

    switch (fetchData.status) {
      case 200:

        if ( fetchData.data.length >= 10 ){
            setPageNum( pageNum + 1 );
        }else{
            setIsEnd( true );
        }
        setDiaryList( [...diaryList, ...mapper(fetchData.data)]);

        break;

      case 400:
        setMessage("날짜 형식이 잘못되었습니다.");
        break;

      case 401:
        setMessage("로그인이 필요한 서비스입니다.", loginRoute);
        break;

      case 404:
        // 데이터의 끝을 알림
        setIsEnd(true);
        break;

      case 500:
        errorRoute(500, "서버에러");
        break;
    }
    setIsLoading(false);
  }, [fetchData]);

  return [getMyDiary];
};
