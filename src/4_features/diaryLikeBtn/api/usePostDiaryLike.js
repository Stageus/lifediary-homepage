import { useState, useEffect } from "react";
import { useFetch, useCookie } from "@shared/hook";

export const usePostDiaryLike = ( isLiked, likeCnt ) => {
    
    const [ _, status, baseFetch ] = useFetch();
    const { handleGetCookie } = useCookie();
    const [ currentLike, setCurrentLike ] = useState( isLiked );
    const [ currentCount, setCurrentCount ] = useState( likeCnt );

    const changeLikeInfo = () => {

        if ( currentLike ) setLikeCount( currentCount - 1);
        if ( !currentLike ) setLikeCount( currentCount + 1);
        
        setCurrentLike( !currentLike );
    }

    const postDiaryLike = ( diaryIdx ) => {
        // 임시데이터(삭제예정)
        changeLikeInfo();

        // 임시주석
        // baseFetch( `diary/${diaryIdx}/like`, {method: "POST"}, handleGetCookie() );
    };

    useEffect(()=>{

        if(status === 200) return changeData();
        if(status === 400) return console.log("유효성 검사 실패일경우");
        if(status === 401) return console.log("토큰이 잘못된경우 (없는경우)");
        if(status === 404) return console.log("대상 diaryIdx가 없는경우");
        if(status === 500) return console.log("서버에러");

    },[status])
    
    return [ currentLike, currentCount, postDiaryLike ];
}