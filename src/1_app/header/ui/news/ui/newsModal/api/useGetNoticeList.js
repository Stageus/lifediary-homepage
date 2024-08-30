// Npm
import { useEffect, useState, useRef } from "react";
// Layer
import { useFetch, useCookie } from "@shared/hook";
import { useMessage } from "@shared/store";
import { parseTime } from "@shared/util";

export const useGetNoticeList = () => {

  const [ fetchData, baseFetch ] = useFetch();
  const { cookieGet } = useCookie();
  const setMessage = useMessage( state => state.setMessage );

  const [ noticeList, setNoticeList ] = useState([]);
  const pageNumRef = useRef(1);
  const [ isLoading, setIsLoading ] = useState( false );
  const [ isEnd, setIsEnd ] = useState( false );


  // 알람데이터에 대한 mapper
  const mapper = ( resData ) => {

    const noticeTypeText = {
      newComment: "님이 새로운 댓글을 달았습니다.",
      newDiary: "님이 새로운 일기를 작성했습니다.",
      deletedMyDiary: "내일기가 신고받아 삭제되었습니다.", // -> 클릭 or 404
      deletedDiary: "신고한 일기가 삭제되었습니다.",// -> 클릭 or 404
      recoveredDiary: "삭제된 내일기가 복구 되었습니다",
    };

    const prevDataWrap = resData?.map( item => ({
      idx: item.idx,
      diaryIdx: item.diaryIdx,
      nickname: item.nickname,
      noticeType: noticeTypeText[item.noticeType],
      createdAt: parseTime(item.createdAt),
      isRoutes: item.noticeType,
    }))

    return prevDataWrap;
  };

  const getNoticeList = () => {
    if ( isEnd ) return;
    setIsLoading( true );
    baseFetch( `notice?page=${pageNumRef.current}`, {}, cookieGet("token") );
  };

  // 상태에 따른 예외처리
  useEffect(() => {
    if ( !fetchData ) return;

    setIsLoading( false );
    const mapperData = mapper( fetchData.data );

    switch ( fetchData.status ) {
        case 200:
            pageNumRef.current = pageNumRef.current + 1;
            setNoticeList( [...noticeList, ...mapperData] );
            break;

        case 400:
            setMessage("알림리스트를 불러오지 못했습니다.");
            break;

        case 401:
            break;

        case 404:
            setIsEnd(true);
            break;

        case 500:
            setMessage("서버문제로 알림리스트를\n불러오지 못했습니다.");
            break;
    }

  }, [ fetchData ]);

  return [ getNoticeList, noticeList, isLoading ];
};
