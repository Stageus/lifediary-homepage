import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch, useCookie } from "@shared/hook";

export const usePutComplain = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const navigate = useNavigate();

    const putComplain = ( diaryIdx, isInvalid )=>{
        baseFetch(`report/${diaryIdx}/status`, {method:"PUT", data: {"isInvalid":isInvalid}}, cookieGet("token"));
    };
    
    useEffect(() => {
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                navigate(0);
                break;

            case 400:
                console.log("유효성 검사 실패일 경우");
                break;

            case 401:
                console.log("토큰이 잘못된경우, 없는경우");
                break;

            case 403:
                console.log("관리자가 아닐경우");
                break;

            case 404:
                console.log("대상으로 하는 idx가 없는경우");
                break;

            case 500:
                console.log("서버 에러");
                break;

            default:
                console.log("예상하지못한 경우")
        }

    },[fetchData]);

return [ putComplain ];

}