import { useEffect } from "react";
import { useFetch, useCookie } from "@shared/hook";

export const useDeleteNotice = () => {
    const [ _, status, baseFetch ] = useFetch();
    const { handleGetCookie } = useCookie();

    const deleteNotice = ( noticeIdx ) => {
        baseFetch(`notice/${noticeIdx}`, {}, handleGetCookie());
    }

    useEffect( () => {

        if ( status === 200) return console.log("삭제알람?");
        if ( status === 400) return console.log("유효성검사 실패일 경우");
        if ( status === 401) return console.log("토큰이 잘못된 경우 (없는경우)");
        if ( status === 404) return console.log("대상으로하는 noticeIdx가 없는경우");
        if ( status === 500) return console.log("서버에러");

    },[status])


    return [ deleteNotice ]
}