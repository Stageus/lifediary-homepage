// Npm
import { useEffect, useState } from "react";
// Layer
import { useFetch, useCookie } from "@shared/hook";
import { parseTime } from "@shared/util";

export const useGetNoticeList = () => {

  const [ fetchData, baseFetch] = useFetch();
  const { handleGetCookie } = useCookie();
  const [ noticeList, setNoticeList ] = useState( null );
  const [ errorMessage, setErrorMessage ] = useState( null );
  const [ isLoading, setIsLoading ] = useState( false );
  const [ pageNum, setPageNum ] = useState( 1 );

  const mapper = ( prevData ) => {

    const noticeTypeText = {
      newComment: "님이 새로운 댓글을 달았습니다.",
      newDiary: "님이 새로운 일기를 작성했습니다.",
      deletedMyDiary: "내일기가 신고받아 삭제되었습니다.",
      deletedDiary: "신고한 일기가 삭제되었습니다.",
      recoveredDiary: "삭제된 내일기가 복구 되었습니다",
    };

    const prevDataWrap = prevData.map( item => {
      if ( item.noticeType === "deletedMyDiary" 
        || item.noticeType === "deletedDiary" 
        || item.noticeType === "recoveredDiary" ) {
        return {
          idx: item.idx,
          noticeType: noticeTypeText[item.noticeType],
          createdAt: parseTime(item.createdAt),
        };
      }

      return {
        idx: item.idx,
        diaryIdx: item.diaryIdx,
        nickname: item.nickname,
        noticeType: noticeTypeText[item.noticeType],
        createdAt: parseTime(item.createdAt),
      };
    });

    return prevDataWrap;
  };

  const getNoticeList = () => {
    if ( errorMessage ) return;
    setIsLoading( true );
    baseFetch( `notice?page=${pageNum}`, {}, handleGetCookie() );
  };

  useEffect(() => {
    getNoticeList();
  }, []);

  useEffect(() => {
    if ( !fetchData ) return;

    const status = fetchData.status;
    setIsLoading( false );
    switch ( status ) {
      case 200:
        // 함수로 분리 예정
        const mapperData = mapper( fetchData.data );
        setPageNum( pageNum + 1 );
        if ( !noticeList ) return setNoticeList( mapperData );
        setNoticeList( [...noticeList, ...mapperData] );
        break;
      case 400:
        setErrorMessage( "잠시후에 다시 시도해주세요" );
        break;
      case 401:
        // navigate 예정
        console.log("토큰이 잘못된 경우 (없는경우)");
        break;
      case 404:
        // 초기 렌더링, 이후 렌더링에 대한 조건 추가예정
        setErrorMessage( "알람이 존재하지 않아요!" );
        break;
      case 500:
        // 다른 조건으로 변경 예정
        setErrorMessage( "서버 에러" );
        break;
    }

  }, [ fetchData ]);

  return [ getNoticeList, noticeList, isLoading, errorMessage ];
};
