import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useFetch, useCookie } from "@shared/hook";
import { useEffect } from "react";
export const useIsUser = () => {
    const [ fetchData, baseFetch ] = useFetch();
    const { code } = useParams();
    const { handleSetCookie } = useCookie();
    const navigate = useNavigate();
    const location = useLocation();
    
    const isUser = () => {
        baseFetch(`login/oauth/google/redirect?code=${code}`)
    }

    useEffect(()=>{
        if(code){
            isUser();
        };
    },[]);

    useEffect(()=>{
        if ( !fetchData ) return;

        if ( fetchData.status === 200){
            // 계정이 없다면
            if ( !fetchData.data.isAccountExist ) return navigate("/signup");
            // 계정이 있다면
            handleSetCookie("myCookie", fetchData.data.token);
            navigate("/");
        }

    },[fetchData])

    return [ isUser ];
}