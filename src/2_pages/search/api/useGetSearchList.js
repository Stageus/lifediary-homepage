// Npm
import { useEffect, useState } from "react";
// Slice
import { useSearchParams, useNavigate } from "react-router-dom";
// Layer
import { useFetch } from "@shared/hook/useFetch";
import { useMessage } from "@shared/store";
import { useRoute } from "@shared/hook";
import { tagValidation } from "@shared/consts/validation";

export const useGetSearchList = () => {

  const [ diaryList, setDiaryList ] = useState( null );
  const [ fetchData, baseFetch ] = useFetch();
  const [ pageNum, setPageNume ] = useState( 1 );
  const [ searchParams ] = useSearchParams();
  const setMessage = useMessage( state => state.setMessage );
  const [ errorMessage, setErrorMessage ] = useState( null );
  const { errorRoute } = useRoute();
  const navigate = useNavigate();
  

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

    const decodedTags = searchParams.get("tags");
    
    // 태그가 입력되지 않았을경우
    if ( !decodedTags ) {   
      baseFetch(`diary/search?page=${pageNum}&tags=""`);
      return;
    };

    // 서버요청전에 유효성검사
    const checkTags = decodedTags.split(",");
    const isRegex = checkTags.some( tag => !tagValidation(tag));

    if ( isRegex ){
      setMessage("입력된 태그가 잘못되었습니다.",()=>{
        navigate(-1);
      });
      return;
    };

    const tagsWrap = checkTags.map( tag => `&tags=${decodeURIComponent(tag)}`).join("");
    baseFetch(`diary/search?page=${pageNum}${tagsWrap}`);
  };

  useEffect(() => {
    getSearchList();
  }, [searchParams]);


  useEffect(() => {
    if ( !fetchData ) return;
    
    switch ( fetchData.status ) {
      case 200:
        setDiaryList( mapper( fetchData.data ) );
        setErrorMessage( null );
        break;
      case 400:
        setMessage("잘못된 요청입니다.");
        break;
      case 404:
        setErrorMessage("등록된 일기가 존재하지 않습니다");
        setDiaryList(null);
        break;
      case 500:
        errorRoute(500, "서버에러");
        break;
    };
  }, [fetchData]);

  return [ diaryList, errorMessage ];
};
