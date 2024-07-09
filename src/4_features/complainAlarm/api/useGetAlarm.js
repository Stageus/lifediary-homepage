import { useEffect, useState } from "react";
import { useFetch, useCookie } from "@shared/hook";

export const useGetAlarm = () => {
    // 임시데이터
    const [alarm, setAlarm] = useState(true);
    const [fetchData, status, baseFetch] = useFetch();
    const { handleGetCookie } = useCookie();

    const getAlarm = ()=>{
        baseFetch("report/new",{},handleGetCookie());
    }

    useEffect(()=>{
        // 임시주석
        // getAlarm();

        if(status === 201){
            return setAlarm(fetchData.isNew)
        }
        
        if(status === 401){
            return console.log("토큰이 잘못되거나 없는경우");
        }

        if(status === 403){
            return console.log("관리자가 아닌경우")
        }

        if(status === 500){
            return console.log("서버 에러")
        }
        
        // 알림은 페이지가 새로고침시에만 발생시키기 때문에
        // 의존성은 할당하지 않는다
    },[])

    return alarm;
};