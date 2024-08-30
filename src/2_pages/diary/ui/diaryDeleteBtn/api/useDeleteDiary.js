// Npm
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Layer
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { useMessage } from "@shared/store";

export const useDeleteDiary = ()=>{

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const { diaryRoute, errorRoute } = useRoute();
    const setMessage = useMessage( state => state.setMessage);
    const navigate = useNavigate();
    

    const deleteDiary = ( diaryIdx ) => {
        baseFetch(`diary/${diaryIdx}`, {method: "DELETE"}, cookieGet("token"));
    };

    useEffect(()=>{
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                navigate(0);
                setMessage("일기가 삭제되었습니다", diaryRoute);
                break;

            case 400:
                setMessage("해당 일기를 삭제할 수 없습니다.\n잠시후 다시 시도해주세요.");
                break;

            case 401:
                setMessage("로그인이 필요한 서비스입니다.");
                break;

            case 403:
                setMessage("일기는 작성자만 삭제할 수 있습니다.");
                break;

            case 404:
                setMessage("해당일기는 존재하지 않는 일기입니다.");
                break;

            case 500:
                errorRoute(500, "서버에러");
                break;
        }
        
    },[ fetchData ])

    return [ deleteDiary ];
}