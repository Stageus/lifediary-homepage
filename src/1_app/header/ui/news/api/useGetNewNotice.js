// Npm
import { useEffect, useState } from "react";
// Layer
import { useFetch, useCookie } from "@shared/hook";
import { useMessage } from "@shared/store";

export const useGetNewNotice = () => {
    
    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const [ isNew, setIsNew ] = useState( false );
    const setMessage = useMessage( state => state.setMessage );

    const getNewNotice = () => {
        baseFetch("notice/new", {}, cookieGet("token"));
    };

    useEffect(() => {
        getNewNotice();
    },[])

    useEffect( () => {
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                setIsNew(fetchData.data.isNew);
                break
            case 401:
                break
            case 500:
                setMessage("오류로인해 새로운 알람을 불러오지 못했습니다");
                break
        }

    },[fetchData])


    return [isNew]
}