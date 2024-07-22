import { useEffect, useState } from "react";
import { useFetch, useCookie } from "@shared/hook";

export const useGetNoticeList = () => {
    const [ fetchData, status, baseFetch ] = useFetch();
    const { handleGetCookie } = useCookie();
    const [ noticeList, setNoticeList ] = useState( null);

    const getNoticeList = () => {
        baseFetch("notice", {}, handleGetCookie());
    };

    useEffect( () => {

        if ( status === 200) return console.log("성공일경우 데이터저장")
        if ( status === 400) return console.log("유효성 감사 실패일 경우");
        if ( status === 401) return console.log("토큰이 잘못된 경우 (없는경우)");
        if ( status === 404) return console.log("더이상의 알림이 없는경우");
        if ( status === 500) return console.log("서버에러");

    },[status])


    return []
}