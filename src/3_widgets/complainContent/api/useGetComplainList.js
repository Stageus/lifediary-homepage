import { useEffect, useState } from "react";
import { useFetch,useCookie } from "@shared/hooks";

export const useGetComplainList = ()=>{
    const [complainList, setComplainList] = useState({});
    const [fetchData, errorStatus, baseFetch] = useFetch();
    const { handleGetCookie } = useCookie();

    

    const getComplainList = (page)=>{
        baseFetch(`report?page=${page}`,{},handleGetCookie());
    }

    useEffect(()=>{
        getComplainList();
        if(errorStatus){
            return "에러바운더리 대기"
        }

    },[])
    
    return [fetchData];
}