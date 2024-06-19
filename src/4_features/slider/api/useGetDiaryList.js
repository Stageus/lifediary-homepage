import { useEffect, useState } from "react";
import {sliceArray} from "../lib/sliceArray";
export const useGetDiaryList = () =>{
    const [diaryList, setDiaryList] = useState([]);
    const [page, setPage] = useState(0);

    const getDiaryList = async()=>{
        try{
            // 이후 useFetch 대체를 위한 이름 선언
            const useFetch = await fetch("http://jsonplaceholder.typicode.com/photos?_start=0&_limit=15");
            const jsonData = await useFetch.json();
            setDiaryList(sliceArray(jsonData,5));
        }catch(error){
            console.log("error")
        }
    }

    useEffect(()=>{
        getDiaryList();
    },[])

    return [diaryList]
}