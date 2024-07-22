// Npm
import { useEffect, useState } from "react";
// Slice
import { createTestData } from "../service/createTestData";
import { mapper } from "../lib/mapper";
// Layer
import { useFetch, useCookie } from "@shared/hook";
import { useSubscribe } from "@shared/store";


export const useGetSubscribeList = () => {

    const [ subscribeList, setSubscribeList ] = useState( null );
    const [ fetchData, status, baseFetch ] = useFetch();
    const { handleGetCookie } = useCookie();
    const isSubscribe = useSubscribe( state => state.value );
    const [ page, setPage ] = useState(1);

    const addPage = () => setPage( page + 1 );

    const isEmpty = () => {

        if ( page === 1 ) return setSubscribeList( mapper(fetchData));
        
        setSubscribeList([...subscribeList, ...mapper(fetchData)]);
        
    };

    const getSubscribeList = ()=>{
        
        // 임시데이터 & 조건문 (삭제예정)
        if(page === 1){
            setSubscribeList(mapper( createTestData() ));

        }else{
            setSubscribeList([...subscribeList,...mapper( createTestData() )]);
        }
        // ______________________________________________________

        // 임시주석
        // baseFetch(`subscription?page=${page}`,{},handleGetCookie());
    };

    useEffect(() => {

        getSubscribeList();

    },[isSubscribe, page]);
    

    useEffect(()=>{

        if(status === 200) return isEmpty();
        if(status === 400) return console.log("유효성검사 실패");
        if(status === 401) return console.log("토큰이 잘못되거나 없는경우");
        if(status === 404) return console.log("더이상 구독 계정이 없음");
        if(status === 500) return console.log("서버에러");

    },[status]);

    return [subscribeList, addPage];
}