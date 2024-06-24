import { useEffect, useState } from "react";
import {sliceArray} from "../lib/sliceArray";


/*
    useFetch 부분에서 받을것들은?
    1. fetch 요청이후의 data
    2. fetch 함수
    3. error status

*/
export const useGetDiaryList = () =>{
    // useFetch의 data를 받을 state 임시
    const [diaryList, setDiaryList] = useState(null);
    // useFetch의 error 상태코드 받을 status 임시
    const [error, setError] = useState(0);
    const [page, setPage] = useState(1);

    const getDiaryList = async()=>{
        try{
            // 추후 api 쿼리스 스트링은 = ?page={page}
            // useFetch의 fetch 함수
            const useFetch = await fetch(`http://jsonplaceholder.typicode.com/photos?_start=${0}&_limit=${15}`);
            const jsonData = await useFetch.json();
            if(diaryList){
                console.log("재요청");
                setDiaryList([...diaryList, ...sliceArray(jsonData,5)]);
                return;
            }
            setDiaryList(sliceArray(jsonData,5));
        }catch(error){
            console.log("error")
        }
    }

    useEffect(()=>{
        // error status에 따른 처리
        // 에러 바운더리 함수를 따로 해야할지? 컴포넌트 페이지 단위로 처리해야할지?
        getDiaryList();
        
    },[page])

    return [diaryList,page,setPage]
}