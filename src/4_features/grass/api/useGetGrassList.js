import { useEffect, useState } from "react";
import { grassWrap } from "../lib/grassWrap";
import {useFetch, useCookie} from "@shared/hook";


// 임시데이터
import { createTestData } from "../model/createTestData";

export const useGetGrassList = ()=>{
    // 임시 데이터
    const [testData, setTestData] = useState([]);
    const [data, error, baseFetch] = useFetch();
    const [selectYear, setSelectYear] = useState(null);
    const {handleGetCookie} = useCookie();

    


    const getGrassList = ()=>{
        if(!selectYear){
            // 임시데이터
            setTestData(grassWrap(createTestData()));
            // 임시주석
            // baseFetch("grass",{},handleGetCookie());
            return;
        }
        // 임시데이터
        setTestData(grassWrap(createTestData(selectYear)));
        // 임시주석
        // baseFetch(`grass?year=${selectYear}`,{},handleGetCookie());
    }

    useEffect(()=>{
        getGrassList();
        if(error){
            return "에러 바운더리 대기"
        }
    },[selectYear])


    return [testData, setSelectYear]
    // 임시주석
    // return[data, setSelectYear];
}