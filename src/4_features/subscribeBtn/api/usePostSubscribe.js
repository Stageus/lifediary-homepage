// Npm
import { useEffect, useState } from "react";
// Layer
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { useSubscribe, useAlarm, useMessage } from "@shared/store";

export const usePostSubscribe = ( props ) => {

    const { isSubscribed, nickname, profileImg, accountIdx} = props;
    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const { errorRoute ,loginRoute } = useRoute();
    const setMessage = useMessage( state => state.setMessage );
    const updateSubscribe = useSubscribe( state => state.updateSubscribe );
    const deleteSubscribe = useSubscribe( state => state.deleteSubscribe );

    const [ subscribe, setSubscribe ] = useState( isSubscribed );
    const alarmText = useAlarm( state => state.alarmText );

    const postSubscribe = ( accountIdx )=>{
        baseFetch(`subscription/${accountIdx}`,{method: "POST"},cookieGet("token"));
    };

    useEffect(() => {
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                const selectSubscribe = [{profileImg, nickname, accountIdx}];

                if( subscribe === true ) {
                    deleteSubscribe(accountIdx);
                    alarmText("구독이 취소되었습니다.");
                }
                if( subscribe === false ) {
                    updateSubscribe(selectSubscribe);
                    alarmText("구독이 추가되었습니다.");
                }
                setSubscribe( !subscribe );
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