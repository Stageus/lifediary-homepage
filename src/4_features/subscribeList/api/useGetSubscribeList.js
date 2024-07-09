import { useEffect, useState } from "react";
import { createTestData } from "../service/createTestData";
import { useFetch, useCookie, useSubscribe } from "@shared/hook";


export const useGetSubscribeList = ()=>{
    const [subscribeList, setSubscribeList] = useState([]);
    const [fetchData, status, baseFetch] = useFetch();
    const { handleGetCookie } = useCookie();
    const isSubscribe = useSubscribe( state => state.value);
    const getSubscribeList = (page)=>{
        const pageIndex = page ?? 1;
        
        // 임시데이터
        if(pageIndex === 1){
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

        if(status === 200){
            return setSubscribeList(fetchData);
        }

    },[isSubscribe,status])

    return [subscribeList, getSubscribeList];
}