// Npm
import { useEffect, useState } from "react";
// Layer
import { useFetch, useRoute } from "@shared/hook";
import { useMessage } from "@shared/store";

export const useGetCheckName = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const [ isInvalid, setIsInvalid] = useState( true );
    const setMessage = useMessage( state => state.setMessage );
    const { errorRoute } = useRoute();

    const getCheckName = ( name ) => {
        baseFetch(`account/nickname/duplication?nickname=${name}`);
    };

    useEffect(()=>{
        if ( !fetchData ) return;
        
        switch ( fetchData.status ) {
            case 200:
                setIsInvalid( fetchData.data.isInvalid );
                setMessage("사용가능한 아이디입니다!");
                break;

            case 400:
                setMessage("잘못된 요청입니다.");
                break;

            case 500:
                errorRoute(500, "서버에러");
                break;
        }

    },[fetchData])

    return [ isInvalid, getCheckName ];
}