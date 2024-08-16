import { useEffect } from "react";
import { useFetch, useRoute } from "@shared/hook";
import { useMessage } from "@shared/store";

export const useGetAccountDiary = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const { errorRoute } = useRoute();
    const setMessage = useMessage( state => state.setMessage );

    const getAccountDiary = () => {
        baseFetch()
    };

    useEffect(()=>{
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                break;
            case 400:
                break;
            case 404:
                break;
            case 500:
                errorRoute(500, "서버에러");
                break;
        }

    },[]);
    

    return [];
}

