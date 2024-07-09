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
    },[isSubscribe])
    

    useEffect(()=>{
        if(status === 200){
            setSubscribeList(fetchData)
            return ;
        }
        if(status === 400){
            return console.log("유효성검사 실패");
        }
        if(status === 401){
            return console.log("토큰이 잘못되거나 없는경우");
        }
        if(status === 404){
            return console.log("더이상 구독 계정이 없음");
        }
        if(status === 500){
            return console.log("서버에러");
        }
    },[status])

    return [subscribeList, getSubscribeList];
}