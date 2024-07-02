import { useEffect, useState } from "react";
import {createTestData} from "../model/createTestData";
import { useFetch, useCookie } from "@shared/hook";


export const useGetComplainInfo = ()=>{
    const [complainInfo, setComplainInfo] = useState({
        list: null,
        count: null,
    });

    const [complainList, listErrorStatus, listFetch] = useFetch([]);
    const [complainCount, countErrorStatus, countFetch] = useFetch(null);
    const [page, setPage] = useState(0);
    const { handleGetCookie } = useCookie();


    const getComplainInfo = ()=>{
        // listFetch(`report?page=${page}`,{},handleGetCookie());
        // countFetch("report/count",{},handleGetCookie());
    }

    useEffect(()=>{
        getComplainInfo();
        if(listErrorStatus){
            return "에러바운더리 대기";
        }

        if(countErrorStatus){
            return "에러바운더리 대기";
        }
    },[listErrorStatus,countErrorStatus,page])

    useEffect(()=>{
        // 테스트 데이터
        if(true){
            setComplainInfo({
                list: createTestData(),
                count: 25
            })
        }
        // 임시주석
        // if(complainList && complainCount){
        //     setComplainInfo({
        //         list: complainList,
        //         count: complainCount
        //     })
        // }
    },[complainList, complainCount])
    
    
    return [complainInfo]
}