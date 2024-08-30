// Npm
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// Layer
import { useMessage } from "@shared/store";
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { parseTime } from "@shared/util";

export const useGetComplainList = () => {
    
    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const { errorRoute, complainRoute } = useRoute();
    const setMessage = useMessage( state => state.setMessage );

    const [ complainList, setComplainList ] = useState( null );
    const [ searchParams ] = useSearchParams();

    const mapper = ( resData ) => {

        const mapperWrap = resData?.reports?.map( res => (
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
    
        return {reports: [...mapperWrap], maxPage: resData.maxPage};
    };

    const getComplainList = () => { 
        baseFetch(`report?page=${searchParams.get( "page" )}`, {}, cookieGet("token"));
    };

    useEffect(() => {
        const selectPage = searchParams.get( "page" );
        if ( selectPage === null || selectPage === "") complainRoute(1);
        getComplainList();
    },[searchParams]);

    useEffect(() => {
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                const mapperWrap = mapper( fetchData.data);
                setComplainList( mapperWrap );
                break;
            case 400:
                setMessage("잠시후에 다시 시도해주세요");
                break;
            case 401:
                break;
            case 403:
                setMessage("관리자외 접근금지");
                break;
            case 404:
                break;
            case 500:
                errorRoute(500, "서버에러");
                break;
        }

    },[fetchData]);
    
    return [ complainList ];
}