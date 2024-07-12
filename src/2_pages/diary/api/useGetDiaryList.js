import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { useFetch, useCookie } from "@shared/hook";
// 테스트 데이터
import { createTestData } from "../service/createTestData";

/*
    브라우저를 통하여 주소를 복사하고 해당 url을 공유할경우에는
    url을 업데이트 해야함
*/
export const useGetDiaryList = () => {
    const [fetchData, status, baseFetch] = useFetch();
    const { handleGetCookie } = useCookie();
    const { diaryidx } = useParams();
    const [diaryList, setDiaryList] = useState(null);
    const [page, setPage] = useState(1);

    const nextPage = () => setPage(page + 1);

    const getDiaryList = ()=>{

        if(diaryidx){
            // 임시데이터
            setDiaryList(createTestData());
            // 메인페이지에서의 특정일기를 포함한 리스트 반환
            // baseFetch(`diary/${params}?page=${page}`,{},handleGetCookie());
        }

        if(diaryList){
            setDiaryList([...diaryList, ...createTestData()]);
        }

        setDiaryList(createTestData());
        // 메인페이지에서의 기본 리스트 반환
        // baseFetch(`diary?page=${page}`,{},handleGetCookie());
    }

    useEffect(()=>{
        getDiaryList();
    },[page])

    useEffect(()=>{
        if(status === 200){
            if(diaryList){
                setDiaryList([...diaryList, ...fetchData()]);
                return;
            }
            setDiaryList(fetchData);
            return;
        }

        if(status === 400){
            return console.log("유효성검사 실패일경우")
        }

        if(status === 404){
            return console.log("페이지를 기입안햇을경우, 리소스가 없을경우")
        }

        if(status === 500){
            return console.log("서버 에러")
        }
        

    },[fetchData])

    

    return [diaryList, nextPage]
}