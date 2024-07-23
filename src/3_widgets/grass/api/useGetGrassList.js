// Npm
import { useEffect, useState } from "react";
// Slice
import { grassWrap } from "../lib/grassWrap";
// Layer
import { useFetch, useCookie } from "@shared/hook";

export const useGetGrassList = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const { handleGetCookie } = useCookie();
    const [ grassList, setGrassList ] = useState( null );
    const [ selectYear, setSelectYear ] = useState(null);

    const onClickYears = ( year )=> setSelectYear( year );

    // 데이터 mapper
    const mapper = ( mapperData )=>{

        const grassList = mapperData.map( data  => (
            {
                idx: data.idx,
                color: data.color,
                date: data.date
            }
        ));

        return grassList;
    };

    const getGrassList = () => {

        // 선택된 년도가 없다면
        if ( !selectYear ) return baseFetch("grass",{},handleGetCookie());

        // 선택된 년도가 있다면
        baseFetch(`grass?year=${selectYear}`,{},handleGetCookie());
    };

    useEffect(() => {
        getGrassList();
    },[selectYear]);

    useEffect(() => {
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                setGrassList( grassWrap( mapper( fetchData.data ) ) );
                break
            case 400:
                // 서버에 다시 요청을하고, 호출횟수를 기록하고, 이후에 알림 적용할예정
                setErrorMessage( "잠시후에 다시 시도해주세요" );
                break
            case 401:
                // commonModal 적용 예정
                console.log("회원만 가능한 접근입니다.");
                break
            case 500:
                // commonModal 적용 예정
                console.log("잠시후에 다시 시도해주세요");
                break
            // 500 에러와 같이 사용?
            default:
                console.log("예상하지 못한 상황");
        }

    },[fetchData]);

    return [ grassList, onClickYears ];
}