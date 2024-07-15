import { useState, useEffect } from "react";
import { useFetch, useCookie } from "@shared/hook";

export const usePostDiaryLike = ( isLiked, likeCnt ) => {
    const [ _, status, baseFetch ] = useFetch();
    const { handleGetCookie } = useCookie();
    const [ isLike, setIsLike ] = useState( isLiked );
    const [ likeCount, setLikeCount ] = useState( likeCnt );

    const changeLikeInfo = () => {
        if ( isLike ) setLikeCount( likeCount - 1);
        if ( !isLike ) setLikeCount( likeCount + 1);
        setIsLike( !isLike );
    }

    const postDiaryLike = ( diaryIdx ) => {
        // 임시데이터
        changeLikeInfo();

        // 임시주석
        // baseFetch( `diary/${diaryIdx}/like`, {method: "POST"}, handleGetCookie() );
    };

    useEffect(()=>{

        if(status === 200){
            changeData();
            return ;
        }
        if(status === 400){
            return console.log("유효성 검사 실패일경우");
        }
        if(status === 401){
            return console.log("토큰이 잘못된경우 (없는경우)");
        }
        if(status === 404){
            return console.log("대상 diaryIdx가 없는경우");
        }
        if(status === 500){
            return console.log("서버에러");
        }

    },[status])
    
    return [ isLike, likeCount, postDiaryLike ];
}