import { useFetch,useCookie } from "@shared/hooks";
import { useEffect, useState } from "react";

export const useGetComplainInfo = ()=>{
    const [complainList, listErrorStatus, listFetch] = useFetch();
    const [complainCount, countErrorStatus, countFetch] = useFetch();
    const [page, setPage] = useState(0);
    const { handleGetCookie } = useCookie();


    const getComplainList = ()=>{
        listFetch(`report?page=${page}`,{},handleGetCookie());
    }

    const getComplainCount = ()=>{
        countFetch("report/count",{},handleGetCookie());
    }

    useEffect(()=>{
        getComplainList();
        getComplainCount();
        if(listErrorStatus){
            return "에러바운더리 대기";
        }

        if(countErrorStatus){
            return "에러바운더리 대기";
        }

    },[])
    
    return [complainList, complainCount];
}