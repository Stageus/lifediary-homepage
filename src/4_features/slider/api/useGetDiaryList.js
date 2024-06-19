import { useEffect, useState } from "react";
import {sliceArray} from "../lib/sliceArray";
export const useGetDiaryList = () =>{
    const [diaryList, setDiaryList] = useState(null);
    const [page, setPage] = useState(1);

    const getDiaryList = async()=>{
        try{
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
        getDiaryList();
        
    },[page])

    return [diaryList,page,setPage]
}