import { useEffect, useState } from "react";
import {createTestData} from "../model/createTestData";
import { divideToArray } from "../lib/divideToArray";
import { useFetch, useCookie } from "@shared/hook";


export const useGetComplainInfo = ()=>{
    const [complainInfo, setComplainInfo] = useState({
        list: null,
        count: null,
    });
    const [complainList, listErrorStatus, listFetch] = useFetch([]);
    const [complainCount, countErrorStatus, countFetch] = useFetch(null);
    const [page, setPage] = useState(1);
    const { handleGetCookie } = useCookie();

    const changePage = (num)=> setPage(num);

    const getComplainInfo = ()=>{
        listFetch(`report?page=${page}`,{},handleGetCookie());
        countFetch("report/count",{},handleGetCookie());
    };

    useEffect(()=>{
        // 임시주석
        // getComplainInfo();
        if(listErrorStatus){
            return "에러바운더리 대기";
        }

        if(countErrorStatus){
            return "에러바운더리 대기";
        }
    },[listErrorStatus,countErrorStatus,page]);

    useEffect(()=>{
        // 테스트 데이터
        if(true){
            setComplainInfo({
                list: createTestData(),
                count: divideToArray(24,5)
            });
        }
        // 임시주석
        // if(complainList && complainCount){
        //     setComplainInfo({
        //         list: complainList,
        //         count: divideToArray(complainCount,5)
        //     })
        // }
    },[complainList, complainCount]);
    
    
    return [complainInfo, changePage];
}