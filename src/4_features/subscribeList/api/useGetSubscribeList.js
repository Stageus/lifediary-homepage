import { useEffect, useState } from "react";
import { createTestData } from "../model/createTestData";
import { useFetch, useCookie, useSubscribe } from "@shared/hook";


export const useGetSubscribeList = ()=>{
    const [subscribeList, setSubscribeList] = useState([]);
    const [fetchData, errorStatus, baseFetch] = useFetch();
    const { handleGetCookie } = useCookie();
    const isSubscribe = useSubscribe( state => state.value);
    const getSubscribeList = (page)=>{
        const pageIndex = page ?? 0;
        
        // 임시데이터
        if(!pageIndex){
            setSubscribeList(createTestData());
        }else{
            setSubscribeList([...subscribeList,...createTestData(page)]);
        }

        // 임시주석
        // baseFetch(`subscription?page=${pageIndex}`,{},handleGetCookie());
        // setSubscribeList([...subscribeList,...fetchData]);
    }
    

    useEffect(()=>{
        getSubscribeList();

        if(errorStatus){
            return "에러바운더리 대기";
        }

    },[isSubscribe,errorStatus])

    return [subscribeList, getSubscribeList];
}