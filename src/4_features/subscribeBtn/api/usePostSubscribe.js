import { useEffect, useState } from "react";
import { useFetch, useCookie } from "@shared/hook";
import { useSubscribe } from "@shared/store";

export const usePostSubscribe = (isSubscribed) => {
    const [fetchData, status, baseFetch] = useFetch();
    const {handleGetCookie} = useCookie();
    const [subscribe, setSubscribe] = useState( isSubscribed );
    const updateSubscribe = useSubscribe( state => state.updateSubscribe );


    const changeSubscribe = () => {
        setSubscribe( !subscribe );
        updateSubscribe();
    };

    const postSubscribe = (accountIdx)=>{

        // 테스트데이터(삭제예정)
        setSubscribe( !subscribe );

        // 임시주석
        // baseFetch(`subscription/${accountIdx}`,{method: "POST"},handleGetCookie());
    };

    useEffect(() => {

        if(status === 200) return changeSubscribe();
        if(status === 400) return console.log("유효성 검사실패");
        if(status === 401) return console.log("토큰이 잘못되거나 없는경우");
        if(status === 404) return console.log("해당 accountidx가 존재하지 않는경우");
        if(status === 500) return console.log("서버에러");
        
    },[]);
    
    return [subscribe, postSubscribe];
}