// Npm
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// Layer
import { useFetch, useCookie } from "@shared/hook";
// Test
import { createTestData } from "../service/createTestData";

export const useGetComplainList = () => {
    
    const [ complainList, setComplainList ] = useState( null );
    const [ fetchData, status, baseFetch ] = useFetch();
    const { handleGetCookie } = useCookie();
    const [ searchParams ] = useSearchParams();

    const mapper = ( prevData ) => {

        const mapperWrap = prevData.result.map( res => (
            {
                idx: res.idx,
                textContent: res.textContent,
                nickname: res.nickname,
                createdAt: res.createdAt,
                isInvalid: res.isInvalid,
                diaryIdx: res.diaryIdx,
                processedAt: res.processedAt
            }
        ))
    
        return {result: [...mapperWrap], reportCnt: prevData.reportCnt}
    };

    const getComplainList = () => { 

        if ( !searchParams.size ) {
            baseFetch(`report?page=${1}`,{},handleGetCookie());
            return;
        }

        baseFetch(`report?page=${searchParams.get( "page" )}`,{},handleGetCookie());
    };

    useEffect(() => {

        // Test
        const _getComplainList = () => {

            if ( !searchParams.size ) {
                setComplainList({...mapper( createTestData( 1 ) )});
                return;
            }
    
            setComplainList({...mapper( createTestData( searchParams.get( "page" ) ) )}); 
        };
        _getComplainList();

        // original
        // getComplainList();

    },[searchParams.get("page")]);

    useEffect(() => {

        if ( status === 200 ) return setComplainList( mapper( fetchData ) );
        if ( status === 400 ) return console.log("유효성 검사 실패일 경우");
        if ( status === 401 ) return console.log("토큰이 없는경우, 잘못된경우");
        if ( status === 403 ) return console.log("관리자가 아닐경우");
        if ( status === 404 ) return console.log("더이상 작성된 신고가 없을경우");
        if ( status === 500 ) return console.log("서버 에러");

    },[fetchData]);
    
    return [ complainList ];
}