// Npm
import { useEffect, useState } from "react";
// Layer
import { useFetch, useCookie } from "@shared/hook";

export const useGetAlarm = () => {
    
    const [ fetchData, baseFetch ] = useFetch();
    const { handleGetCookie } = useCookie();
    const [ isNew, setIsNew ] = useState( false );

    const getAlarm = ()=> baseFetch("report/new",{},handleGetCookie());

    useEffect(() => {
        // getAlarm();
    },[])

    useEffect(() => {
        if ( !fetchData ) return;
        
        switch ( fetchData.status ) {
            case 200:
                setIsNew(fetchData.data.isNew)
                break;

            case 401:
                console.log("토큰이 잘못되거나 없는경우");
                break;

            case 403:
                console.log("관리자가 아닌경우");
                break;

            case 500:
                console.log("서버 에러");
                break;
            default:
                console.log("예상하지못한 경우")
        }

    },[ fetchData ])

    return [ isNew ];
};