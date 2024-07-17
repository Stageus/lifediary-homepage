// Npm
import { useEffect, useState } from "react";
// Slice
import { grassWrap } from "../lib/grassWrap";
import { mapper } from "../lib/mapper";
// Layer
import { useFetch, useCookie } from "@shared/hook";
// 임시데이터(삭제예정)
import { createTestData } from "../service/createTestData";

export const useGetGrassList = () => {

    const [ grassList, setGrassList ] = useState( null );
    const [ fetchData, status, baseFetch ] = useFetch();
    const [ selectYear, setSelectYear ] = useState(null);
    const { handleGetCookie } = useCookie();

    const getGrassList = () => {

        // 선택된 년도가 없다면
        if ( !selectYear ) {

            // 임시데이터(삭제예정)
            setGrassList( grassWrap( mapper( createTestData() ) ) );
            // 임시주석
            // baseFetch("grass",{},handleGetCookie());
            return;
        }

        // 선택된 년도가 있다면
        // 임시데이터(삭제예정)
        setGrassList( grassWrap( mapper( createTestData( selectYear ) ) ) );
        // 임시주석
        // baseFetch(`grass?year=${selectYear}`,{},handleGetCookie());
    };

    useEffect(() => {

        getGrassList();

    },[selectYear]);

    useEffect(() => {

        if ( status === 200 ) return setGrassList( mapper( fetchData ) );
        if ( status === 400 ) return console.log("유효성 검사 실패");
        if ( status === 401 ) return console.log("토큰이 잘못되거나 없음");
        if ( status === 500 ) return console.log("서버오류");

    },[status]);

    return [ grassList, setSelectYear ];
}