import { useEffect, useState } from "react";
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { useMessage } from "@shared/store";


export const usePutProfileImg = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const { loginRoute } = useRoute();
    const setMessage = useMessage( state => state.setMessage );
    
    const [ isSuccess, setisSuccess ] = useState( false );

    const onClickAgain = () => {
        if( isSuccess ) setisSuccess(false);
    };

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
                setMessage("로그인이 필요한 서비스입니다.\n로그인화면으로 이동하시겠습니까?",loginRoute);
                break;

            case 500:
                setMessage("500 서버에러: 이미지를 변경할수 없습니다.");
                break;
        }

    },[fetchData])


    return [ isSuccess, onClickAgain, putProfileImg ];
}