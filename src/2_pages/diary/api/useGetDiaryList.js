// Npm
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// Layer
import { useFetch, useCookie } from "@shared/hook";

export const useGetDiaryList = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const { handleGetCookie } = useCookie();
    const { diaryidx } = useParams();
    const [ diaryList, setDiaryList ] = useState( null );
    const [ pageNum, setPageNum ] = useState(1);
    const [ errorMessage, setErrorMessage ] = useState( null );
    const [ isLoading, setIsLoading ] = useState( false );

    const mapper = ( resData ) => {
        
        const resDataWrap = resData.map( item => (
            {
                idx : item.idx,
			    imgContents : item.imgContents,
			    textContent : item.textContent,
			    likeCnt : item.likeCnt,
			    commentCnt : item.commentCnt,
			    createdAt : item.createdAt,
			    accountIdx : item.accountIdx,
			    nickname : item.nickname,
			    profileImg : item.profileImg,
			    isSubscribed : item.isSubscribed,
			    isLiked : item.isLiked,
			    isMine : item.isMine,
            }
        ));

        return resDataWrap;
    }

    const getDiaryList = ( diaryIdx )=>{
        if ( errorMessage ) return;
        setIsLoading( true );

        if ( diaryIdx ) {
            baseFetch(`diary/${diaryidx}?page=${pageNum}`,{},handleGetCookie());
            return;
        }
        baseFetch(`diary?page=${pageNum}`,{},handleGetCookie());
    };

    useEffect(()=>{
        if ( diaryidx ) {
            getDiaryList(diaryidx);
        } else{
            getDiaryList();
        }
    },[])

    useEffect(()=>{
        if ( !fetchData ) return;
        setIsLoading( false );

        switch ( fetchData.status ) {
            case 200:
                setPageNum( pageNum + 1 );
                const mapperData = mapper( fetchData.data );

                if ( diaryList ) {
                    setDiaryList([...diaryList, ...mapperData]);
                    return;
                }
                setDiaryList(mapperData);
                break;

            case 400:
                console.log("유효성검사 실패일경우");
                break;

            case 404:
                if ( !pageNum ) return console.log("잘못되었을경우 공통모달로 처리")
                setErrorMessage( "더이상 일기가 존재하지 않아요!" );
                break;

            case 500:
                console.log("서버 에러");
                break;
        }
    },[ fetchData ]);

    

    return [ diaryList, getDiaryList, isLoading, errorMessage ];
}