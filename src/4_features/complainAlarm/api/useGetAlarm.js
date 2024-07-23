// Npm
import { useEffect, useState } from "react";
// Layer
import { useFetch, useCookie } from "@shared/hook";

export const useGetAlarm = () => {
    
    const [ alarm, setAlarm ] = useState( false );
    const [ fetchData, status, baseFetch ] = useFetch();
    const { handleGetCookie } = useCookie();

    const getAlarm = ()=>{
        baseFetch("report/new",{},handleGetCookie());
    }

    useEffect(() => {
        // 임시주석
        // getAlarm();
    },[])

    useEffect(() => {

        if ( status === 200 ) return setAlarm(fetchData.isNew);
        if ( status === 401 ) return console.log("토큰이 잘못되거나 없는경우");
        if ( status === 403 ) return console.log("관리자가 아닌경우");
        if ( status === 500 ) return console.log("서버 에러");

    },[])

    return alarm;
};