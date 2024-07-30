// Npm
import { useEffect, useState } from "react";
// Slice
import { sliceDiaryCount } from "../lib/sliceDiaryCount";
// Layer
import { useFetch } from "@shared/hook";

export const useGetDiaryList = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const [ diaryList, setDiaryList ] = useState( null );
    const [ page, setPage ] = useState( 1 );

    const nextPage = () => setPage( page + 1 );

    const mapper = ( resData )=>{

        const sliderDiaryList = resData.map( data  => (
            {
                idx : data.idx,
                thumbnailImg : data.thumbnailImg,
                nickname : data.nickname,
                profileImg : data.profileImg,
            }
        ));
    
        return sliderDiaryList;
    }

    const getDiaryList = () => baseFetch(`diary/home?page=${page}`);

    useEffect(() => {
        getDiaryList();
    },[page]);

    useEffect(() => {
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                if ( !diaryList ) return setDiaryList(sliceDiaryCount( mapper(fetchData.data), 5 ));
                setDiaryList([...diaryList, ...sliceDiaryCount( mapper(fetchData.data), 5 )]);
                break;

            case 400:
                // commonModal 적용 예정
                console.log("잠시후에 다시 시도해주세요");
                break;

            case 404:
                // commonModal 적용 예정
                console.log("페이지기입 안했을경우");
                console.log("일기리소스가 없을경우");
                break;

            case 500:
                // commonModal 적용 예정
                console.log("잠시후에 다시 시도해주세요");
                break;
            // 500 에러와 같이 사용?
            default:
                console.log("예상하지 못한 상황");
        }
        
    },[fetchData]);

    return [diaryList, nextPage]
}