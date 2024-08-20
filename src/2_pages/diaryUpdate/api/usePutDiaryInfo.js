// Npm
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// Layer
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { useMessage } from "@shared/store"

export const usePutDiaryInfo = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const { loginRoute, backRoute, errorRoute } = useRoute();
    const setMessage = useMessage( state => state.setMessage);
    const { diaryIdx } = useParams();

    const putDiaryInfo = ( props ) => {
        
        const { textContent, tags, isPublic, color, imgContents, deletedImgs } = props;

        const formData = new FormData();
        if ( Array.isArray(tags) && tags.length ) tags.forEach( tag => formData.append("tags", tag));
        if ( Array.isArray(imgContents) && imgContents.length ) imgContents.forEach( fileObj => formData.append("imgContents", fileObj));
        if ( Array.isArray(deletedImgs) && deletedImgs.length ) deletedImgs.forEach( url => formData.append("deletedImgs", url));
        formData.append("textContent", textContent);
        formData.append("isPublic", isPublic);
        formData.append("color", color);

        baseFetch(`diary/${ diaryIdx }`, {method:"PUT", data:formData}, cookieGet("token"));
    };

    useEffect( () => {

        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                // 임시로 홈이지만, 이후에는 메인페이지로 리다이렉트하는걸로
                homeRoute();
                break;

            case 400:
                setMessage("일기수정은 작성한날짜에만\n수정할수 있습니다.", backRoute);
                break;

            case 401:
                setMessage("로그인이 필요한 서비스입니다.", loginRoute);
                break;

            case 403:
                setMessage("일기수정은 본인만 가능합니다", backRoute);
                break;

            case 404:
                setMessage("존재하지 않는 일기입니다.", backRoute);
                break;

            case 500:
                errorRoute(500, "서버에러");
                break;
        }

    },[fetchData]);
 
    return [ putDiaryInfo ];
}