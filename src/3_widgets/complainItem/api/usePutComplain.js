import { useState, useEffect } from "react";
import { useFetch, useCookie } from "@shared/hook";

export const usePutComplain = ( isInvalid ) => {

    const { handleGetCookie } = useCookie();
    const [ _, status, baseFetch ] = useFetch();
    const [ itemState, setItemState ] = useState( isInvalid );
    const [ saveState, setSaveState] = useState( null );

    const changeState = () => setItemState( saveState );

    const putComplain = ( diaryIdx, isInvalid )=>{
        // 200이라는 가정한 테스트 데이터
        setSaveState(isInvalid);

        // 임시주석
        // baseFetch(`report/${diaryIdx}/status`, { isInvalid }, handleGetCookie());
        changeState();
    };
    
    useEffect(() => {

        if  ( status === 200 ) return changeState();
        if  ( status === 400 ) return console.log("유효성 검사 실패일 경우");
        if  ( status === 401 ) return console.log("토큰이 잘못된경우, 없는경우");
        if  ( status === 403 ) return console.log("관리자가 아닐경우");
        if  ( status === 404 ) return console.log("대상으로 하는 idx가 없는경우");
        if  ( status === 500 ) return console.log("서버 에러");

    },[status]);

return [itemState, putComplain];

}