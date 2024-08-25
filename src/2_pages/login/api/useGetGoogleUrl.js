// Npm
import { useEffect } from "react";
// Layer
import { useFetch, useRoute } from "@shared/hook";

export const useGetGoogleUrl = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const { errorRoute } = useRoute();

    const onClickGetUrl = () => {
        baseFetch("account/login/oauth/google");
    };

    useEffect(()=>{
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                window.location.href = fetchData.data.redirectUrl;
                break;
                
                case 500:
                errorRoute(500, "서버오류로 인해 Google 로그인을 할수 없습니다.");
                break;
        };

    },[fetchData]);

    return [ onClickGetUrl ];
};