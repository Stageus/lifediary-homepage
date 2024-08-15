// Npm
import { useEffect, useState } from "react";
// Layer
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { useSubscribe, useAlarm, useMessage } from "@shared/store";

export const usePostSubscribe = ( isSubscribed ) => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const [ subscribe, setSubscribe ] = useState( null );
    const updateSubscribe = useSubscribe( state => state.updateSubscribe );
    const alarmText = useAlarm( state => state.alarmText );
    const setMessage = useMessage( state => state.setMessage );
    const { errorRoute ,loginRoute } = useRoute();

    useEffect(()=>{
        setSubscribe(isSubscribed);
    },[isSubscribed])

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
                setMessage(`잠시후에 다시시도해주세요`);
                break;

            case 401:
                setMessage(`로그인이 필요한 서비스입니다\n로그인화면으로 이동하시겠습니까?`,loginRoute, true);
                break;

            case 404:
                setMessage(`해당계정이 존재하지않습니다.`);
                break;

            case 500:
                errorRoute(500,"서버에러");
                break;
        }
        
    },[ fetchData ]);
    
    return [ subscribe, postSubscribe ];
}