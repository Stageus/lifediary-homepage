// Npm
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Layer
import { useFetch, useCookie } from "@shared/hook";

export const useGetDiaryList = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const { diaryidx } = useParams();
    const [ diaryList, setDiaryList ] = useState( null );
    const [ pageNum, setPageNum ] = useState(1);
    const [ isLoading, setIsLoading ] = useState( false );
    const [ isEnd, setIsEnd ] = useState( false );

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
    };

    const getDiaryList = ()=>{
        setIsLoading( true );
        baseFetch(`diary?${diaryidx ? "startWith=" + diaryidx + "&" : ""}page=${pageNum}`, {}, cookieGet("token"));
    };

    useEffect(()=>{
        getDiaryList();
    },[])

    useEffect(()=>{
        if ( !fetchData ) return;
        setIsLoading( false );

        switch ( fetchData.status ) {
            case 200:
                const mapperData = mapper(fetchData.data);
                setDiaryList(prevDiaryList => prevDiaryList ? [...prevDiaryList, ...mapperData] : mapperData);
                
                const moreData = mapperData.length >= 10;
                setPageNum(prevPageNum => moreData ? prevPageNum + 1 : prevPageNum);
                setIsEnd(!moreData);
                break;

            case 400:
                // console.log("유효성검사 실패일경우");
                break;

            case 404:
                // if ( !pageNum ) return console.log("잘못되었을경우 공통모달로 처리")
                // setErrorMessage( "더이상 일기가 존재하지 않아요!" );
                break;

            case 500:
                // console.log("서버 에러");
                break;
        }
    },[ fetchData ]);

    

    return [ diaryList, getDiaryList, isLoading ];
}