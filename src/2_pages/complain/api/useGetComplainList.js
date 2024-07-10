import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch, useCookie } from "@shared/hook";
import { mapper } from "../lib/mapper";
// 임시데이터
import { createTestData } from "../service/createTestData";

export const useGetComplainList = ()=>{
    const [complainList, setComplainList] = useState({});
    const [fetchData, status, baseFetch] = useFetch();
    const { handleGetCookie } = useCookie();
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = ()=> searchParams.get("page");

    const changePage = (pageNumber)=>{
        setSearchParams({page: pageNumber})
    }

    const getComplainList = ()=>{
        baseFetch(`report?page=${searchParams.size}`,{},handleGetCookie());
    }

    useEffect(()=>{
        // 임시데이터
        if(searchParams.size === 0){
            setComplainList({...mapper(createTestData(1))});    
        }else{
            setComplainList({...mapper(createTestData(searchParams.get("page")))});
        }
        // 임시주석
        // getComplainList();
    },[searchParams])

    useEffect(()=>{
        if(status === 200){
            setComplainList(mapper(fetchData));
        }

        if(status === 400){
            return console.log("유효성 검사 실패일 경우");
        }

        if(status === 401){
            return console.log("토큰이 없는경우, 잘못된경우");
        }

        if(status === 403){
            return console.log("관리자가 아닐경우");
        }

        // 이게 필요한가?
        if(status === 404){
            return console.log("더이상 작성된 신고가 없을경우");
        }

        if(status === 500){
            return console.log("서버 에러");
        }

    },[status])
    
    return [complainList, currentPage, changePage];
}