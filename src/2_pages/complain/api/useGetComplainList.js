// Npm
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// Slice
import { mapper } from "../lib/mapper";
// Layer
import { useFetch, useCookie } from "@shared/hook";
// 임시데이터
import { createTestData } from "../service/createTestData";

export const useGetComplainList = () => {
    
    const [ complainList, setComplainList ] = useState( null );
    const [ fetchData, status, baseFetch ] = useFetch();
    const { handleGetCookie } = useCookie();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const currentPage = ()=> searchParams.get( "page" );

    const changePage = ( pageNumber )=> {
        setSearchParams( {page: pageNumber} )
    };

    const getComplainList = ()=>{ 

        if ( !searchParams.size ) {
            setSearchParams( { page: 1 } );
            // 임시 데이터(삭제예정)
            setComplainList({...mapper( createTestData( 1 ) )});
            // baseFetch(`report?page=${1}`,{},handleGetCookie());
            return;
        }

        // 임시 데이터(삭제예정)
        setComplainList({...mapper( createTestData( searchParams.get( "page" ) ) )}); 
        // 임시주석
        // baseFetch(`report?page=${searchParams.get( "page" )}`,{},handleGetCookie());
    };

    useEffect(() => {

        getComplainList();

    },[searchParams]);

    useEffect(() => {

        if ( status === 200 ) return setComplainList(mapper(fetchData));
        if ( status === 400 ) return console.log("유효성 검사 실패일 경우");
        if ( status === 401 ) return console.log("토큰이 없는경우, 잘못된경우");
        if ( status === 403 ) return console.log("관리자가 아닐경우");
        if ( status === 404 ) return console.log("더이상 작성된 신고가 없을경우");
        if ( status === 500 ) return console.log("서버 에러");

    },[fetchData]);
    
    return [complainList, currentPage, changePage];
}