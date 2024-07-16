// Npm
import { useEffect, useState } from "react";
// Slice
import { mapper } from "../lib/mapper";
import { sliceDiaryCount } from "../lib/sliceDiaryCount";
// Layer
import { useFetch } from "@shared/hook";
// 임시데이터
import { createTestData } from "../service/createTestData";

export const useGetDiaryList = () => {

    const [ diaryList, setDiaryList ] = useState( null );
    const [ fetchData, status, baseFetch ] = useFetch();
    const [ page, setPage ] = useState( 1 );
    const addPage = () => setPage( page + 1 );

    const isEmpty = () => {
        
        if ( page === 1 ) return setDiaryList(sliceDiaryCount(mapper(fetchData), 5));

        setDiaryList([...diaryList, ...sliceDiaryCount(mapper(fetchData), 5)]);
    }

    const getDiaryList = () => {
        // ____________________________________________________________조건문(삭제예정)
        if(page === 1){
            // 임시데이터 (삭제예정)
            setDiaryList(sliceDiaryCount(mapper(createTestData(page)), 5));
            return;
        }
        // 임시데이터(삭제예정)
        setDiaryList([...diaryList,...sliceDiaryCount(mapper(createTestData(page)), 5)]);
        // __________________________________________________________________________

        // 임시주석
        // baseFetch(`diary/home?page=${page}`);
    }

    useEffect(() => {

        getDiaryList();

    },[page]);

    useEffect(() => {

        if ( status === 200 ) return isEmpty();
        if ( status === 400 ) return console.log("유효성 검사 실패");
        if ( status === 404 ) return console.log("페이지기입 안했을경우, 일기리소스가 없을경우");
        if ( status === 500 ) return console.log("서버 에러");
        
    },[status]);

    
    return [diaryList, addPage]
}