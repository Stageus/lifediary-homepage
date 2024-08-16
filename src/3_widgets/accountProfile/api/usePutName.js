import { useEffect, useState } from "react";
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { useMessage } from "@shared/store";

export const usePutName = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const { errorRoute } = useRoute();
    const setMessage = useMessage( state => state.setMessage );

    const putName = ( name ) => {
        baseFetch("account/nickname",{method:"PUT", data:{"nickname":name}},cookieGet("token"));
    };

    useEffect(()=>{
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                // 
                break;

            case 400:
                setMessage("잠시후에 다시 시도해주세요.");
                break;

            case 401:
                setMessage("로그인이 필요한 서비스입니다.");
                break;

            case 409:
                setMessage("이미사용중인 닉네임 입니다");
                break;

            case 500:
                errorRoute(500,"서버에러");
                break;
        }

    },[fetchData])


    return [ putName ];
}