// Npm
import { useEffect } from "react";
// Layer
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { useMessage } from "@shared/store"

export const usePostDiary = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const { homeRoute, errorRoute, loginRoute } = useRoute();
    const setMessage = useMessage( state => state.setMessage);

    const postDiary = ( props ) => {
        
        const { textContent, tags, isPublic, color, imgContents } = props;
        
        if ( imgContents.length > 3) {
            setMessage("이미지는 최대 3개까지만 등록가능합니다");
            return;
        }

        if ( !color ) {
            setMessage("색상 선택은 필수입니다");
            return;
        }

        const formData = new FormData();
        formData.append("textContent", textContent);
        formData.append("tags", tags);
        formData.append("isPublic", isPublic);
        formData.append("color", color);
        // formData는 배열을 문자열로 인식한다 ? file객체를 배열로 담을경우에 발생했음
        imgContents.forEach( file => formData.append("imgContents",file));
        baseFetch("diary", {method:"POST", data:formData}, cookieGet("token"));
    }

    useEffect(()=>{
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                // 일기수정 가능한 안내시간
                // 일기작성 개수 고지
                // 임시로 홈이지만, 이후에는 메인페이지로 리다이렉트하는걸로
                homeRoute();
                break;

            case 400:
                setMessage("일기는 하루에 한개만 작성가능합니다.");
                break;

            case 401:
                setMessage("회원만 작성이 가능합니다. 로그인화면으로 이동하시겠습니까?", loginRoute, true);
                break;

            case 500:
                errorRoute( 500, "서버에러" );
                break;
        }

    },[fetchData])

    return [ postDiary ]
}