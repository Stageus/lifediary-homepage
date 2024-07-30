import { useState, useEffect } from "react";
import { useFetch, useCookie } from "@shared/hook";

export const usePostDiaryLike = ( isLiked, likeCnt ) => {
    
    const [ fetchData, baseFetch ] = useFetch();
    const { handleGetCookie } = useCookie();
    const [ currentLike, setCurrentLike ] = useState( isLiked );
    const [ currentCount, setCurrentCount ] = useState( likeCnt );

    const changeLikeInfo = () => {

        if ( currentLike ) setCurrentCount( currentCount - 1);
        if ( !currentLike ) setCurrentCount( currentCount + 1);
        
        setCurrentLike( !currentLike );
    }

    const postDiaryLike = ( diaryIdx ) => {
        baseFetch( `diary/${diaryIdx}/like`, {method: "POST"}, handleGetCookie() );
    };

    useEffect(()=>{
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                changeLikeInfo();
                break;

            case 400:
                console.log("유효성 검사 실패일경우");
                break;

            case 401:
                console.log("토큰이 잘못된경우 (없는경우)");
                break;

            case 404:
                console.log("대상 diaryIdx가 없는경우");
                break;

            case 500:
                console.log("서버에러");
                break;
        }

    },[ fetchData ]);
    
    return [ currentLike, currentCount, postDiaryLike ];
}