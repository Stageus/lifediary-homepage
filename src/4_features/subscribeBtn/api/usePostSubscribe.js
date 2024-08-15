// Npm
import { useEffect, useState } from "react";
// Layer
import { useFetch, useCookie } from "@shared/hook";
import { useSubscribe, useAlarm } from "@shared/store";

export const usePostSubscribe = ( isSubscribed ) => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const [ subscribe, setSubscribe ] = useState( isSubscribed );
    const updateSubscribe = useSubscribe( state => state.updateSubscribe );
    const alarmText = useAlarm( state => state.alarmText );

    const postSubscribe = ( accountIdx )=>{
        baseFetch(`subscription/${accountIdx}`,{method: "POST"},cookieGet("token"));
    };

    useEffect(() => {
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                if( subscribe === true ) alarmText("구독이 취소되었습니다.");
                if( subscribe === false ) alarmText("구독이 추가되었습니다.");
                setSubscribe( !subscribe );
                updateSubscribe();
                break;

            case 400:
                console.log("유효성 검사실패");
                break;

            case 401:
                console.log("토큰이 잘못되거나 없는경우");
                break;

            case 404:
                console.log("해당 accountidx가 존재하지 않는경우");
                break;

            case 500:
                console.log("서버에러");
                break;

            default:
                console.log("예상하지 못한 에러");
        }
        
    },[ fetchData ]);
    
    return [ subscribe, postSubscribe ];
}