// Npm
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Layer
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { useMessage } from "@shared/store"

export const useGetDiaryInfo = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const { errorRoute, backRoute } = useRoute();
    const setMessage = useMessage( state => state.setMessage);
    const [ diaryInfo, setDiaryInfo ] = useState( null );
    const { diaryIdx } = useParams();

    const mapper = ( resData ) => {

        const resDataWrap = resData[0];
        
        return {
			idx: resDataWrap.idx,
            imgContents: [...resDataWrap.imgContents],
            textContent: resDataWrap.textContent,
            isPublic: resDataWrap.isPublic,
            color: resDataWrap.color,
            tags: [...resDataWrap.tags],
		};
    };
    

    const getDiaryInfo = () => {
        baseFetch(`diary/${diaryIdx}`, {}, cookieGet("token"));
    };

    useEffect(()=>{
        getDiaryInfo();
    },[]);

    useEffect(()=>{

        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                setDiaryInfo( mapper(fetchData.data) );
                break;

            case 400:
                setMessage("일기를 불러올수 없습니다.", backRoute);
                break;

            case 403:
                setMessage("일기수정은 본인만 가능합니다", backRoute);
                break;

            case 404:
                setMessage("존재하지 않는 일기입니다.", backRoute);
                break;

            case 500:
                errorRoute(500, "서버에러");
                break;
        }

    },[fetchData]);

    return [ diaryInfo ]
}