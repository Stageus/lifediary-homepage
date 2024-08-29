import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { useMessage } from "@shared/store";

export const useDeleteAccount = ()=> {
    
    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet, cookieRemove } = useCookie();
    const { errorRoute, loginRoute } = useRoute();
    const setMessage = useMessage( state => state.setMessage );
    const navigate = useNavigate();
    
    const deleteAccount = () => {
        baseFetch("account", {method:"DELETE"}, cookieGet("token"));
    };

    useEffect(()=>{
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                cookieRemove();
                setMessage("이용해주셔서 감사합니다\n로그인화면으로 이동합니다",loginRoute);
                navigate(0);
                break;

            case 401:
                setMessage("회원탈퇴는 본인만 가능합니다");
                break;

            case 500:
                errorRoute(500, "서버에러");
                break;
        }

    },[fetchData])

    return [deleteAccount];
}