// Npm
import { useEffect, useState } from "react";
// Slice
import { grassWrap } from "../lib/grassWrap";
// Layer
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { useMessage } from "@shared/store";

export const useGetGrassList = ( changeYear ) => {
    
    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet, cookieRemove } = useCookie();
    const [ grassList, setGrassList ] = useState( null );
    const [ isLoading, setIsLoading ] = useState( false );
    const [ selectYear, setSelectYear ] = useState( null );
    const { errorRoute } = useRoute();
    const setMessage = useMessage( state => state.setMessage );

    const onClickYears = ( year )=> {
        changeYear( year );
        setSelectYear( year );
    };

    const mapper = ( mapperData )=>{

        const grassList = mapperData.map( data  => (
            {
                idx: data.idx,
                color: data.color,
                date: data.date
            }
        ));

        return grassList;
    };

    const getGrassList = () => {

        setIsLoading( true );
        baseFetch(`grass${selectYear ? "?year=" + selectYear : ""}`, {}, cookieGet("token"));
    };

    useEffect(() => {
        getGrassList();
    },[selectYear]);

    useEffect(() => {
        if ( !fetchData ) return;
        setIsLoading( false );

        switch ( fetchData.status ) {
            case 200:
                setGrassList( grassWrap( mapper( fetchData.data ) ) );
                break;

            case 400:
                setMessage("일시적인 오류로\n잔디목록을 볼수없습니다");
                break;

            case 401:
                cookieRemove();
                break;

            case 500:
                errorRoute(500, "서버에러");
                break;
        }

    },[fetchData]);

    return [ grassList, onClickYears, isLoading ];
}