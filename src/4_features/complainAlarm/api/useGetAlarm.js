import { useEffect, useState } from "react";


import { useFetch, useCookie } from "@shared/hook";

export const useGetAlarm = () => {
    // 임시데이터
    const [testData, setTestData] = useState({
		"isNew": true
	});
    const [fetchData, errorStatus, baseFetch] = useFetch();
    const { handleGetCookie } = useCookie();

    const getAlarm = ()=>{
        baseFetch("report/new",{},handleGetCookie());
    }

    useEffect(()=>{
        // 임시주석
        // getAlarm();

        if(errorStatus){
            return "에러바운더리 대기";
        }
        
        // 알림은 페이지가 새로고침시에만 발생시키기 때문에
        // 의존성은 할당하지 않는다
    },[])

    // 임시데이터
    return testData.isNew;
    // return fetchData.isNew;
};