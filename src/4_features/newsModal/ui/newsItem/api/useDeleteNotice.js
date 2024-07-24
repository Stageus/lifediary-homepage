// Npm
import { useState, useEffect } from "react";
// Layer
import { useFetch, useCookie } from "@shared/hook";

export const useDeleteNotice = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const { handleGetCookie } = useCookie();
    const [ isDelete, setIsDelete ] = useState( true );

    const deleteNotice = ( noticeIdx ) => {
        baseFetch(`notice/${noticeIdx}`, {method: "DELETE"}, handleGetCookie());
    };

    useEffect( () => {
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                setIsDelete( false );
                break;

            case 400:
                // commonModal 적용 예정
                console.log("잠시후에 다시 시도해주세요");
                break;

            case 401:
                // commonModal 적용 예정
                console.log("회원만 가능한 접근입니다.");
                break;

            case 404:
                // commonModal 적용 예정
                console.log("이미 삭제된 알림입니다.");
                break;

            case 500:
                // commonModal 적용 예정
                console.log("잠시후에 다시 시도해주세요");
                break;
            // 500 에러와 같이 사용?
            default:
                console.log("예상하지 못한 상황")
        }

    },[ fetchData ]);

    return [ deleteNotice, isDelete];
}