// Npm
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// Layer
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { parseTime } from "@shared/util";

export const useGetComplainList = () => {
    
    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const { complainRoute } = useRoute();

    const [ complainList, setComplainList ] = useState( null );
    const [ searchParams ] = useSearchParams();

    const mapper = ( resData ) => {

        const mapperWrap = resData.reports.map( res => (
            {
                idx: res.idx,
                textContent: res.textContent,
                nickname: res.nickname,
                createdAt: parseTime(res.createdAt),
                isInvalid: res.isInvalid,
                diaryIdx: res.diaryIdx,
                processedAt: res.processedAt
            }
        ))
    
        return {reports: [...mapperWrap], maxPage: resData.maxPage}
    };

    const getComplainList = () => { 
        baseFetch(`report?page=${searchParams.get( "page" )}`, {}, cookieGet("token"));
    };

    useEffect(() => {
        const selectPage = searchParams.get( "page" );
        
        if ( selectPage === null || selectPage === ""){
            complainRoute(1)
        }else {
            getComplainList();
        }
    },[searchParams]);

    useEffect(() => {
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                const mapperWrap = mapper( fetchData.data);
                setComplainList( mapperWrap );
                break;
            case 400:
                console.log("유효성 검사 실패일 경우");
                break;
            case 401:
                console.log("토큰이 없는경우, 잘못된경우");
                break;
            case 403:
                console.log("관리자가 아닐경우");
                break;
            case 404:
                alert("404페이지로 리다이렉트")
                console.log("더이상 작성된 신고가 없을경우");
                break;
            case 500:
                console.log("서버 에러");
                break;
            default:
                console.log("예상하지 못한 경우");
        }

    },[fetchData]);
    
    return [ complainList ];
}