// Npm
import { useEffect } from "react";
// Slice
import { useFetch, useRoute, useCookie } from "@shared/hook";

export const usePostAccount = () => {
    
    const [ fetchData, baseFetch ] = useFetch();
    const { errorRoute, homeRoute } = useRoute();
    const { setCookie } = useCookie();

    const postAccount = ( accountInfo ) => {

        console.log("실행",accountInfo)
        // baseFetch("account", {method:"POST", data:accountInfo});
    };

    useEffect(()=>{
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                setCookie("token",fetchData.data.token);
                homeRoute();
                break;

            case 400:
                setMessage("잘못된 요청입니다.");
                break;

            case 500:
                errorRoute(500, "서버에러");
                break;
        }

    },[fetchData])

    return [ postAccount ];
}