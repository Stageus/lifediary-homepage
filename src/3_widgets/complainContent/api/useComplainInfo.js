import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {createTestData} from "../service/createTestData";
import { divideToArray } from "../lib/divideToArray";
import { useFetch, useCookie } from "@shared/hook";

export const useGetComplainInfo = ()=>{
    const location = useLocation();

    const [complainInfo, setComplainInfo] = useState({
        list: null,
        count: null,
    });
    const [complainList, listErrorStatus, listFetch] = useFetch([]);
    const [complainCount, countErrorStatus, countFetch] = useFetch(null);
    const [_, changeErrorStatus, putFetch] = useFetch();
    const [page, setPage] = useState(1);
    const { handleGetCookie } = useCookie();

    const changePage = (num)=> setPage(num);

    console.log(createTestData());
    const getComplainInfo = ()=>{
        listFetch(`report?page=${page}`,{},handleGetCookie());
    };

    const putComplainState = (complainIdx,state)=>{
        // 임시데이터
        const changeData = complainInfo.list.map( value => value.idx === complainIdx ? {...value, isInvalid: state} : value);
        setComplainInfo({...complainInfo, list:changeData})
        // putFetch(`report/${complainIdx}/status`,{method:"PUT",data:{"isInvalid":state}},handleGetCookie());
        // getComplainInfo()
    }

    useEffect(()=>{
        // 임시주석
        // getComplainInfo();
        if(listErrorStatus){
            return "에러바운더리 대기";
        }

        if(countErrorStatus){
            return "에러바운더리 대기";
        }

        if(changeErrorStatus){
            return "에러바운더리 대기";
        }
        
    },[listErrorStatus,countErrorStatus,changeErrorStatus,page]);

    useEffect(()=>{
        // 테스트 데이터
        if(true){
            setComplainInfo({
                list: createTestData(page),
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
    },[complainList, complainCount,page]);
    
    
    return [complainInfo, page, changePage,putComplainState];
}