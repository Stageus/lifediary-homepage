import { useFetch } from "@shared/hooks";
import { useEffect } from "react";
export const useGetComplainList = ()=>{
    const [fetchData, errorStatus, baseFetch] = useFetch();


    const getComplainList = ()=>{
        baseFetch("report")
    }

    useEffect(()=>{
        getComplainList();
        if(errorStatus){
            return "에러바운더리 대기"
        }

    },[])
    
    return [fetchData];
}