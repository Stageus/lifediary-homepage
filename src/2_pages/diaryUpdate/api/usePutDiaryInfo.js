// Npm
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// Layer
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { useMessage } from "@shared/store"

export const usePutDiaryInfo = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const { homeRoute, errorRoute } = useRoute();
    const setMessage = useMessage( state => state.setMessage);
    const { diaryIdx } = useParams();

    const putDiaryInfo = ( props ) => {
        
        const { textContent, tags, isPublic, color, imgContents, deletedImgs } = props;
        

        if ( !diaryIdx ) {
            setMessage("존재하지 않는 일기입니다.");
            return;
        }

        if ( imgContents && imgContents.length > 3) {
            setMessage("이미지는 최대 3개까지만 등록가능합니다");
            return;
        }

        if ( !color ) {
            setMessage("색상 선택은 필수입니다");
            return;
        }

        const formData = new FormData();
        formData.append("textContent", textContent);
        formData.append("isPublic", isPublic);
        formData.append("color", color);

        console.log("imgContents:",imgContents)

        if ( tags && tags.length !== 0 ) {
            tags?.forEach( tag => formData.append("tags",tag));
        }
        if ( deletedImgs && deletedImgs.length !== 0 ) {
            deletedImgs?.forEach( url => formData.append("deletedImgs",url));
        }
        if ( imgContents && imgContents.length !== 0 ) {
            imgContents?.forEach( file => formData.append("imgContents",file));
        }
        

        // baseFetch(`diary/${ diaryIdx }`, {method:"PUT", data:formData}, cookieGet("token"));
    };

    useEffect( () => {

        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                console.log("성공");
                // homeRoute();
                break;

            case 400:
                break;

            case 401:
                break;

            case 403:
                break;

            case 404:
                break;

            case 500:
                errorRoute( 500, "서버에러" );
                break;
        }

    },[fetchData]);
 
    return [ putDiaryInfo ];
}