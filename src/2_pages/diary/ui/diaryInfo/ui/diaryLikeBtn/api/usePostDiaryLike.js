// Npm
import { useState, useEffect } from "react";
// Layer
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { useMessage } from "@shared/store";

export const usePostDiaryLike = ( isLiked, likeCnt ) => {
    
    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const [ currentLike, setCurrentLike ] = useState( isLiked );
    const [ currentCount, setCurrentCount ] = useState( likeCnt );
    const setMessage = useMessage( state => state.setMessage );
    const { loginRoute, errorRoute } = useRoute();

    const postDiaryLike = ( diaryIdx ) => {
        if ( !cookieGet("token") ) return setMessage("로그인이 필요한 서비스입니다.\n로그인창으로 이동하시겠습니까?", loginRoute, true);
        baseFetch( `diary/${diaryIdx}/like`, {method: "POST"}, cookieGet("token") );
    };

    useEffect(()=>{
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:

                if ( currentLike ) setCurrentCount( currentCount - 1);
                if ( !currentLike ) setCurrentCount( currentCount + 1);
                setCurrentLike( !currentLike );
                break;

            case 400:
                setMessage("좋아요를 누를수 없습니다.");
                break;

            case 401:
                setMessage("로그인이 필요한 서비스입니다.\n로그인페이지로 이동하시겠습니까?", loginRoute, true);
                break;

            case 404:
                setMessage("해당일기는 존재하지 않는 일기입니다.");
                break;

            case 500:
                errorRoute(500, "서버에러");
                break;
        }

    },[ fetchData ]);
    
    return [ currentLike, currentCount, postDiaryLike ];
}