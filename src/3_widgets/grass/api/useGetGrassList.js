import { useEffect, useState } from "react";
import { grassWrap } from "../lib/grassWrap";
import { mapper } from "../lib/mapper";
import {useFetch, useCookie} from "@shared/hook";
// 임시데이터
import { createTestData } from "../service/createTestData";

export const useGetGrassList = ()=>{
    // 임시 데이터
    const [grassList, setGrassList] = useState([]);
    const [fetchData, status, baseFetch] = useFetch();
    const [selectYear, setSelectYear] = useState(null);
    const {handleGetCookie} = useCookie();

    


    const getGrassList = ()=>{

        if(!selectYear){
            // 임시데이터
            setGrassList(grassWrap(mapper(createTestData())));
            // 임시주석
            // baseFetch("grass",{},handleGetCookie());
            // setGrassList(mapper(fetchData))
            return;
        }
        // 임시데이터
        setGrassList(grassWrap(mapper(createTestData(selectYear))));
        // 임시주석
        // baseFetch(`grass?year=${selectYear}`,{},handleGetCookie());
        // setGrassList(mapper(fetchData))
    }

    useEffect(()=>{
        getGrassList();
        if(status === 400){
            return console.log("유효성 검사 실패");
        }
        
        if(status === 401){
            return console.log("토큰이 잘못되거나 없음");
        }
        
        if(status === 500){
            return console.log("서버오류");
        }
    },[selectYear,status])


    return [grassList, setSelectYear]
}