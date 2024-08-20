// Npm
import { useEffect, useState } from "react";
// Slice
import { sliceDiaryCount } from "../lib/sliceDiaryCount";
// Layer
import { useFetch, useRoute } from "@shared/hook";
import { useMessage } from "@shared/store";

export const useGetDiaryList = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const [ diaryList, setDiaryList ] = useState( null );
    const [ isEnd, setIsEnd ] = useState( false );
    const [ page, setPage ] = useState( 1 );
    const { errorRoute } = useRoute();
    const setMessage = useMessage( state => state.setMessage );

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
                setMessage("일시적인 오류로\n일기목록을 볼수없습니다");
                break;

            case 404:
                setIsEnd( true );
                break;

            case 500:
                errorRoute(500, "서버에러");
                break;
        }
        
    },[fetchData]);

    return [ diaryList, nextPage, isEnd ];
}