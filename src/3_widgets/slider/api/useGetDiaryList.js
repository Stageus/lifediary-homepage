import { useEffect, useState } from "react";
import { sliceDiaryCount } from "../lib/sliceDiaryCount";
import { useFetch } from "@shared/hook";

// 임시데이터
import { createTestData } from "../service/createTestData";


export const useGetDiaryList = () =>{
    const [diaryList, setDiaryList] = useState(null);
    const [fetchData, status, baseFetch] = useFetch();
    const [page, setPage] = useState(0);
    

    const addPage = () => setPage(page + 1);
    const getDiaryList = ()=>{
        if(!page){
            // 임시데이터
            setDiaryList(sliceDiaryCount(createTestData(), 5));
            // 임시주석
            // baseFetch("diary/home");
            // setDiaryList(sliceDiaryCount(fetchData, 5));
            return;
        }

        // 임시데이터
        setDiaryList([...diaryList,...sliceDiaryCount(createTestData(page), 5)]);
        // 임시주석
        // baseFetch(`diary/home?page=${page}`);
        // setDiaryList([...diaryList, ...sliceDiaryCount(fetchData, 5)]);
    }

    useEffect(()=>{
        getDiaryList();
        if(status === 400){
            return console.log("유효성 검사 실패");
        }

        if(status === 404){
            return console.log("페이지기입 안했을경우, 일기리소스가 없을경우")
        }

        if(status === 500){
            return console.log("서버 에러")
        }
        
    },[page, status])

    
    return [diaryList, addPage]
}