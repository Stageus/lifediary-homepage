// Npm
import { useEffect, useState } from "react";
// Slice
import { useSearchParams } from "react-router-dom";
// Layer
import { useFetch } from "@shared/hook/useFetch";
import { useRoute } from "@shared/hook/useRoute";

export const useGetSearchList = () => {

  const [ diaryList, setDiaryList ] = useState( null );
  const [ fetchData, baseFetch ] = useFetch();
  const [ pageNum, setPageNume ] = useState( 1 );
  const [ searchParams ] = useSearchParams();
  const { notFoundRoute, serverRoute } = useRoute();

  const mapper = ( resData ) => {
    
    const mapperData = resData.map( obj => (
      {
        idx : obj.idx,
			  thumbnailImg : obj.thumbnailImg,
			  textContent : obj.textContent,
			  accountIdx : obj.accountIdx,
			  nickname : obj.nickname,
			  profileImg : obj.profileImg,
			  likeCnt : obj.likeCnt,
			  createdAt : obj.createdAt,
			  tags : [...obj.tags],
      }
    ))

    return mapperData;
  };

  const getSearchList = () => {
    baseFetch(`diary/search?page=${pageNum}&tags=${searchParams.get("tag")}`);
  };

  useEffect(() => {
    getSearchList();
  }, []);


  useEffect(() => {
    if ( !fetchData ) return;
    
    switch ( fetchData.status ) {
      case 200:
        setDiaryList( mapper( fetchData.data ) );
        break;
      case 400:
        // 처리 대기
        console.log("유효성 검사 실패일경우");
        break;
      case 404:
        notFoundRoute("등록되어있는 일기가 존재하지 않습니다")
        break;
      case 500:
        serverRoute()
        break;
    };
  }, [fetchData]);

  return [ diaryList ];
};
