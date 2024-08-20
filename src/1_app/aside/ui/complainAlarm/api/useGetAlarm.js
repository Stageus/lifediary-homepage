// Npm
import { useEffect, useState } from "react";
// Layer
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { useMessage } from "@shared/store";

export const useGetAlarm = () => {
    
    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const [ isNew, setIsNew ] = useState( false );
    const setMessage = useMessage( state => state.setMessage );
    const { errorRoute } = useRoute();

    const getAlarm = ()=> baseFetch("report/new", {}, cookieGet("token"));

    useEffect(() => {
        getAlarm();
    },[])

    useEffect(() => {
        if ( !fetchData ) return;
        
        switch ( fetchData.status ) {
            case 200:
                setIsNew(fetchData.data.isNew);
                break;

            case 401:
                break;

            case 403:
                setMessage("권한이 없습니다");
                break;

            case 500:
                errorRoute(500, "서버에러");
                break;
        }

    },[ fetchData ])

    return [ isNew ];
};