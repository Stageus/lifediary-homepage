import { useEffect, useState } from "react";
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { useMessage } from "@shared/store";


export const usePutProfileImg = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const setMessage = useMessage( state => state.setMessage );
    const { errorRoute, loginRoute } = useRoute();
    const [ isSuccess, setisSuccess ] = useState( false );

    const onClickAgain = () => {
        if( isSuccess ) setisSuccess(false);
    }

    const putProfileImg = ( fileObj ) => {
        const formData = new FormData();
        formData.append("profileImg",fileObj);
        baseFetch("account/profileimg",{method:"PUT", data:formData},cookieGet("token"));
    };

    useEffect(()=>{
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                setisSuccess(true);
                break;

            case 400:
                setMessage("올바르지 않은 이미지입니다.");
                break;

            case 401:
                setMessage("로그인후에 다시이용해주세요",loginRoute);
                break;

            case 500:
                errorRoute(500, "서버에러");
                break;
        }

    },[fetchData])


    return [ isSuccess, onClickAgain, putProfileImg ];
}