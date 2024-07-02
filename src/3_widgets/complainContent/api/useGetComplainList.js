import { useFetch,useCookie } from "@shared/hooks";
import { useEffect } from "react";

export const useGetComplainList = ()=>{
    const [fetchData, errorStatus, baseFetch] = useFetch();
    const { handleGetCookie } = useCookie();


    const getComplainList = (page)=>{
        const pageIndex = page ?? 0;
        baseFetch(`report?page=${pageIndex}`,{},handleGetCookie());
    }

    useEffect(()=>{
        getComplainList();
        if(errorStatus){
            return "에러바운더리 대기"
        }

    },[])
    
    return [fetchData];
}