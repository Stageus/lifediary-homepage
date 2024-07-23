// Npm
import { useEffect, useState } from "react";
// Layer
import { useFetch, useCookie } from "@shared/hook";

export const useGetNewNotice = () => {
    
    const [ fetchData, baseFetch ] = useFetch();
    const { handleGetCookie } = useCookie();
    const [ isNew, setIsNew ] = useState( false );

    const getNewNotice = () => baseFetch("notice/new", {}, handleGetCookie());

    useEffect(() => {
        getNewNotice();
    },[])

    useEffect( () => {
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                setIsNew(fetchData.data.isNew);
                break
            case 401:
                // commonModal 적용 예정
                console.log("회원만 가능한 접근입니다.");
                break
            case 500:
                // commonModal 적용 예정
                console.log("잠시후에 다시 시도해주세요");
                break
            // 500 에러와 같이 사용?
            default:
                console.log("예상하지 못한 상황");
        }

    },[fetchData])


    return [isNew]
}