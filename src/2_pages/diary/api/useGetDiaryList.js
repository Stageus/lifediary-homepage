import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch, useCookie } from "@shared/hook";
// 테스트 데이터
import { createTestData } from "../service/createTestData";

export const useGetDiaryList = () => {
    const [fetchData, status, baseFetch] = useFetch();
    const { handleGetCookie } = useCookie();
    const { diaryidx } = useParams();
    const [diaryList, setDiaryList] = useState(null);
    const [page, setPage] = useState(1);

    const nextPage = () => setPage( page + 1 );

    const getDiaryList = ( diaryIdx )=>{

        // 임시데이터 -------------
        if ( diaryList ){
            setDiaryList([...diaryList, ...createTestData()]);
            return;
        }
        setDiaryList(createTestData());
        // --------------------


        // 임시주석
        // if (diaryIdx) {
        //     baseFetch(`diary/${diaryidx}?page=${page}`,{},handleGetCookie());
        // }
        // baseFetch(`diary?page=${page}`,{},handleGetCookie());
    };

    useEffect(()=>{
        if ( diaryidx ) {
            getDiaryList(diaryidx);
        } else{
            getDiaryList();
        }
    },[page])

    useEffect(()=>{
        if ( status === 200 ){
            if ( diaryList ){
                setDiaryList([...diaryList, ...fetchData]);
                return;
            }
            setDiaryList(fetchData);
        }

        if( status === 400 ){
            return console.log("유효성검사 실패일경우")
        }

        if( status === 404 ){
            return console.log("페이지를 기입안햇을경우, 리소스가 없을경우")
        }

        if( status === 500 ){
            return console.log("서버 에러")
        }
        
    },[fetchData])

    

    return [diaryList, nextPage]
}