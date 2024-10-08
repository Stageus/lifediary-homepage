// Npm
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

// Layer
import { useFetch, useRoute, useCookie } from "@shared/hook";
import { useMessage } from "@shared/store";
import { dateValidation } from "@shared/consts/validation";
import { parseTime } from "@shared/util";

export const useGetAccountDiary = (props) => {
    
  const { dateRange } = props;
  const [fetchData, baseFetch] = useFetch();
  const { cookieGet } = useCookie();
  const { errorRoute } = useRoute();
  const setMessage = useMessage((state) => state.setMessage);

  const pageNumRef = useRef(1);
  const [diaryList, setDiaryList] = useState([]);
  const [isEnd, setIsEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { accountIdx } = useParams();

  const mapper = (resData) => {
    const mapperData = resData?.map((diary) => ({
      idx: diary.idx,
      thumbnail: diary.thumbnailImg,
      createdAt: parseTime(diary.createdAt),
    }));

    return mapperData;
  };

  const getAccountDiary = ( newRange ) => {
    if (isEnd) return console.log("유저 작성한일기 끝");
    setIsLoading(true);
    const startDate = dateRange?.startDate
    const endDate = dateRange?.endDate

    if (startDate && !dateValidation(startDate))
      return setMessage("시작날짜 형식이 잘못되었습니다.");
    if (endDate && !dateValidation(endDate))
      return setMessage("종료날짜 형식이 잘못되었습니다.");


    const baseQuery = `page=${ newRange ?? pageNumRef.current}`;
    const startQuery = startDate
    ? `beginDate=${startDate}&`
    : "";
    const endQuery = endDate ? `endDate=${endDate}&` : "";
    const query = startQuery + endQuery + baseQuery;

    // 요청을 한다면 로딩 상태
    setIsLoading(true);
    baseFetch(`diary/userpage/${accountIdx}/mine?${query}`, {}, cookieGet("token"));
  };

  useEffect(() => {
    if (dateRange) {
      setDiaryList([]);
      setIsEnd(false);
      pageNumRef.current = 1;
      getAccountDiary();
    }
    setIsEnd(false);
  }, [dateRange]);

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

      case 404:
        pageNumRef.current = 1;
        setIsEnd(true);
        break;

      case 500:
        errorRoute(500, "서버에러");
        break;
    }
  }, [fetchData]);

  return [isLoading, diaryList, getAccountDiary];
};
