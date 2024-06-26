import { useEffect, useState } from "react";
import {useFetch, useCookie} from "@shared/hook";

export const useGetGrassList = ()=>{
    const [data, error, baseFetch] = useFetch();
    const [selectYear, setSelectYear] = useState(null);
    const {handleGetCookie} = useCookie();


    const getGrassList = ()=>{
        if(!selectYear){
            baseFetch("grass",{},handleGetCookie());
            return;
        }
        baseFetch(`grass?year=${selectYear}`,{},handleGetCookie());
    }

    useEffect(()=>{
        getGrassList();
        if(error){
            return "에러 바운더리 대기"
        }
    },[selectYear])
    return[data, setSelectYear];
}