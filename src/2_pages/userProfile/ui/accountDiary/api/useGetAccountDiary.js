// Npm
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Layer
import { useFetch, useRoute, useCookie } from "@shared/hook";
import { useMessage } from "@shared/store";
import { dateValidation } from "@shared/consts/validation";
import { parseTime } from "@shared/util";

export const useGetAccountDiary = (props) => {
    
  const { dateRange } = props;
  const [fetchData, baseFetch] = useFetch();
  const { errorRoute } = useRoute();
  const setMessage = useMessage((state) => state.setMessage);
  const { cookieGet } = useCookie();
  const [pageNum, setPageNum] = useState(1);
  const [diaryList, setDiaryList] = useState([]);
  const [isEnd, setIsEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { accountIdx } = useParams();

  const mapper = (resData) => {
    const mapperData = resData.map((diary) => ({
      idx: diary.idx,
      thumbnail: diary.thumbnail,
      createdAt: parseTime(diary.createdAt),
    }));

    return mapperData;
  };

  const getAccountDiary = () => {
    // 데이터의 끝이라면 더이상 요청하지 않는다.
    if (isEnd) return;

    if (dateRange.startDate && !dateValidation(dateRange.startDate))
      return setMessage("시작날짜 형식이 잘못되었습니다.");
    if (dateRange.endDate && !dateValidation(dateRange.endDate))
      return setMessage("종료날짜 형식이 잘못되었습니다.");

    const baseQuery = `page=${pageNum}`;
    const startQuery = dateRange.startDate
      ? `startDate=${dateRange.startDate}&`
      : "";
    const endQuery = dateRange.endDate ? `endDate=${dateRange.endDate}&` : "";
    const query = startQuery + endQuery + baseQuery;

    // 요청을 한다면 로딩 상태
    setIsLoading(true);
    baseFetch(`diary/userpage/${accountIdx}/mine?${query}`, {}, cookieGet("token"));
  };

  useEffect(() => {
    if (pageNum === 1) {
        getAccountDiary();
    }
  }, []);

  useEffect(() => {
    setPageNum(1);
    setDiaryList([]);
    setIsEnd(false);
  }, [dateRange]);

  useEffect(() => {
    if (!fetchData) return;

    setIsLoading(false);
    switch (fetchData.status) {
      case 200:
        // 일기데이터를 기존 데이와 합침
        setDiaryList([...diaryList, ...mapper(fetchData.data)]);

        // 응답받은 데이터가 10개 이상이라면
        // 다음페이지가 있을수도 있기에 pageNum을 업데이트
        // 열개 미만이라면 데이터가 끝난걸로 간주하고 데이터의 끝을알림
        if (fetchData.data.length >= 10) {
          setPageNum(pageNum + 1);
        } else {
          setIsEnd(true);
        }
        break;

      case 400:
        setMessage("날짜 형식이 잘못되었습니다.");
        break; 

      case 404:
        // 데이터의 끝을 알림

        if (pageNum === 1) {
          setDiaryList([]);
        }
        setIsEnd(true);
        break;

      case 500:
        errorRoute(500, "서버에러");
        break;
    }
  }, [fetchData]);

  return [isEnd, isLoading, diaryList, getAccountDiary];
};
