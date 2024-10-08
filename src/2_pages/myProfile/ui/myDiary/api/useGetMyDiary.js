// Npm
import { useEffect, useState, useRef } from "react";
// Layer
import { useFetch, useRoute, useCookie } from "@shared/hook";
import { useMessage } from "@shared/store";
import { dateValidation } from "@shared/consts/validation";
import { parseTime } from "@shared/util";

export const useGetMyDiary = (props) => {

  const { dateRange, isClicked } = props;
  const [fetchData, baseFetch] = useFetch();
  const { cookieGet } = useCookie();
  const { errorRoute, loginRoute } = useRoute();
  const setMessage = useMessage((state) => state.setMessage);

  const pageNumRef = useRef(1);
  const [diaryList, setDiaryList] = useState([]);
  const [isEnd, setIsEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const mapper = (resData) => {
    const mapperData = resData?.map((diary) => ({
      idx: diary.idx,
      thumbnail: diary.thumbnailImg,
      isPublic: diary.isPublic,
      createdAt: parseTime(diary.createdAt),
    }));

    return mapperData;
  };

  const getMyDiary = (  ) => {
    if ( isEnd) return;
    setIsLoading(true);
    const startDate = dateRange?.startDate
    const endDate = dateRange?.endDate

    if (startDate && !dateValidation(startDate))
      return setMessage("시작날짜 형식이 잘못되었습니다.");
    if (endDate && !dateValidation(endDate))
      return setMessage("종료날짜 형식이 잘못되었습니다.");

    const baseQuery = `page=${pageNumRef.current}`;
    const startQuery = startDate
      ? `startDate=${startDate}&`
      : "";
    const endQuery = endDate ? `endDate=${endDate}&` : "";
    const query = startQuery + endQuery + baseQuery;

    // 요청을 한다면 로딩 상태
    baseFetch(`diary/mypage/mine?${query}`, {}, cookieGet("token"));
  };

useEffect(() => {
  if ( dateRange ) {
    console.log(dateRange);
    setDiaryList([]);
    setIsEnd(false);
    pageNumRef.current = 1;
    getMyDiary();
  }
  setIsEnd(false);

}, [isClicked]);

  useEffect(() => {
    if (!fetchData) return;

    const mapperData = mapper(fetchData.data);
    setIsLoading(false);
    
    switch (fetchData.status) {
      case 200:
        
        // 해당 부분 처리방식이 이상함
        pageNumRef.current = pageNumRef.current + 1;

        if ( fetchData.data.length <= 10 ) {
          setDiaryList(mapperData);  
        } else {
          setDiaryList([...diaryList, ...mapperData]);
        }
        break;

      case 400:
        setMessage("날짜 형식이 잘못되었습니다.");
        break;

      case 401:
        setMessage("로그인이 필요한 서비스입니다.", loginRoute);
        break;

      case 404:
        pageNumRef.current = 1;
        setIsEnd(true);
        break;

      case 500:
        errorRoute(500, "서버에러");
        break;
    }
  }, [fetchData]);

  return [isLoading, diaryList, getMyDiary];
};
