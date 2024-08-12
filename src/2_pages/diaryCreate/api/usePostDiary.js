import { useEffect } from "react";
import { useFetch, useCookie, useRoute } from "@shared/hook";

export const usePostDiary = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const { homeRoute, errorRoute } = useRoute();

    const postDiary = ( props ) => {

        const { textContent, tags, isPublic, color, imgContents } = props;

        const formData = new FormData();
        formData.append("textContent", textContent);
        formData.append("tags", tags);
        formData.append("isPublic", isPublic);
        formData.append("color", color);
        formData.append("imgContents", imgContents);

        baseFetch("diary", {method:"POST", data:formData}, cookieGet("token"));
    }

    useEffect(()=>{
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                // 일기수정 가능한 안내시간
                // 일기작성 개수 고지
                homeRoute();
                break;

            case 400:
                // 
                break;

            case 401:
                // 로그인후 가능한다는 안내메시지 후 
                // 로그인페이지로 리다이렉트
                break;

            case 500:
                errorRoute( 500, "서버에러" );
                break;
        }

    },[fetchData])

    return [ postDiary ]
}