// Npm
import { useEffect } from "react";
// Layer
import { useFetch, useRoute, useCookie } from "@shared/hook";
import { nameValidation } from "@shared/consts/validation";
import { useMessage } from "@shared/store";

export const usePostAccount = () => {
    
    const [ fetchData, baseFetch ] = useFetch();
    const { errorRoute, homeRoute } = useRoute();
    const setMessage = useMessage( state => state.setMessage );
    const { cookieSet } = useCookie();

    const postAccount = ( accountInfo ) => {

            const { nickname, oauthGoogleId, profileImg} = accountInfo;
        
            if( nameValidation(nickname) && !oauthGoogleId && !profileImg) {
                setMessage(" 프로필 사진과, 이름을 다시한번 확인해주세요");
            }
        
            const formData = new FormData();
            formData.append("profileImg",profileImg);
            formData.append("nickname",nickname);
            formData.append("oauthGoogleId",oauthGoogleId);
            baseFetch("account", {method:"POST", data:formData});     
    };

    useEffect(()=>{
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                cookieSet("token",fetchData.data.token);
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