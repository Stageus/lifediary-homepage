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

  // 알람데이터에 대한 mapper
  const mapper = ( resData ) => {

    const noticeTypeText = {
      newComment: "님이 새로운 댓글을 달았습니다.",
      newDiary: "님이 새로운 일기를 작성했습니다.",
      deletedMyDiary: "내일기가 신고받아 삭제되었습니다.",
      deletedDiary: "신고한 일기가 삭제되었습니다.",
      recoveredDiary: "삭제된 내일기가 복구 되었습니다",
    };

    const prevDataWrap = resData.map( item => {
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

  // 초기페이지 와 다음페이지의 데이터를 요청하기 위한 함수
  const getNoticeList = () => {
    if ( errorMessage ) return;
    setIsLoading( true );
    baseFetch( `notice?page=${pageNum}`, {}, handleGetCookie() );
  };

  // 초기 알람 데이터에 대한 요청
  useEffect(() => {
    getNoticeList();
  }, []);

  // 상태에 따른 예외처리
  useEffect(() => {
    if ( !fetchData ) return;
    setIsLoading( false );

    switch ( fetchData.status ) {
      case 200:
        setPageNum( pageNum + 1 );
        const mapperData = mapper( fetchData.data );

        if ( !noticeList ) return setNoticeList( mapperData );
        setNoticeList( [...noticeList, ...mapperData] );
        break;

      case 400:
        // 서버에 다시 요청을하고, 호출횟수를 기록하고, 이후에 알림 적용할예정
        setErrorMessage( "잠시후에 다시 시도해주세요" );
        break;

      case 401:
        // commonModal 적용 예정
        console.log("토큰이 잘못된 경우 (없는경우)");
        break;

      case 404:
        if ( !noticeList ) return setErrorMessage( "아직 알람이 없어요!" );
        setErrorMessage( "더이상 알람이 존재하지 않아요!" );
        break;

      case 500:
        setErrorMessage( "잠시후에 다시 시도해주세요" );
        break;

      default:
        console.log("모든조건이 일치하지 않을경우");
    }

  }, [ fetchData ]);

  return [ getNoticeList, noticeList, isLoading, errorMessage ];
};
