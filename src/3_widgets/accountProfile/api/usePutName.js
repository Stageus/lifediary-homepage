// Npm
import { useEffect } from "react";
// Layer
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { useMessage } from "@shared/store";
import { nameValidation } from "@shared/consts/validation";

export const usePutName = ( onClickEdit ) => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const { loginRoute } = useRoute();
    const setMessage = useMessage( state => state.setMessage );

    const putName = ( name ) => {
        if ( !nameValidation(name) ) return setMessage("이름은 최소 3자이상 ~ 최대 20자 이하만 가능합니다.");

        baseFetch("account/nickname",{method:"PUT", data:{"nickname":name}},cookieGet("token"));
    };

    useEffect(()=>{
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                onClickEdit();
                break;

            case 400:
                setMessage("이름은 최소 3자이상 ~ 최대 20자\n이하만 가능합니다.");
                break;

            case 401:
                setMessage("로그인이 필요한 서비스입니다.\n로그인화면으로 이동하시겠습니까?",loginRoute);
                break;

            case 409:
                setMessage("이미사용중인 닉네임 입니다");
                break;

            case 500:
                setMessage("500 서버에러: 닉네임을 변경할수 없습니다.");
                break;
        }

    },[fetchData])


    return [ putName ];
}