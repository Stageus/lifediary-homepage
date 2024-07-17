import { useEffect, useState } from "react";
import { useFetch, useCookie } from "@shared/hook";

export const useGetNewNotice = () => {
    const [ fetchData, status, baseFetch ] = useFetch();
    const { handleGetCookie } = useCookie();
    const [ isNew, setIsNew ] = useState( null );

    const getNewNotice = () => {
        baseFetch("notice/new", {}, handleGetCookie());
    }

    useEffect(() => {

        getNewNotice();

    },[])

    useEffect( () => {

        if ( status === 200) return setIsNew( fetchData.isNew );
        if ( status === 401) return console.log("토큰이 잘못된 경우 (없는경우)");
        if ( status === 500) return console.log("서버에러");

    },[status])


    return [isNew]
}