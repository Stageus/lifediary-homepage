import { useEffect } from "react";
import { useFetch, useCookie } from "@shared/hook";
import { useAlarm } from "@shared/store";

export const usePostComplain = () => {
    const [ _, status, baseFetch ] = useFetch();
    const { handleGetCookie } = useCookie();
    const alarmText = useAlarm( state => state.alarmText );

    const postComplain = ( diaryIdx, textContent) => {

        // 임시 데이터(삭제예정)
        console.log("요청성공");
        alarmText("신고가 접수되었습니다");

        // 임시주석
        // baseFetch(`report?diaryIdx=${diaryIdx}`, {method: "POST", textContent}, handleGetCookie());
    };

    useEffect(() => {

        if ( status === 200 ) return alarmText("신고가 접수되었습니다");
        if ( status === 400 ) return console.log("유효성 검사 실패일 경우");
        if ( status === 401 ) return console.log("토큰이 잘못된 경우 (없는경우)");
        if ( status === 404 ) return console.log("대상으로하는 diaryIdx가 없는 경우");
        if ( status === 500 ) return console.log("서버에러");

    },[status]);

    return [postComplain];
}