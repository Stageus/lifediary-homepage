import { useEffect, useState } from "react";
import { sliceDiaryCount } from "../lib/sliceDiaryCount";
import { useFetch } from "@shared/hook";

// 임시데이터
import { createTestData } from "../service/createTestData";


export const useGetDiaryList = () =>{
    const [diaryList, setDiaryList] = useState(null);
    const [fetchData, errorStatus, baseFetch] = useFetch();
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
        if(errorStatus){
            return "에러 바운더리 대기";
        }
        
    },[page, errorStatus])

    
    return [diaryList, addPage]
}