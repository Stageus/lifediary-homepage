// Npm
import { useState, useEffect } from "react";
// Layer
import { useFetch, useCookie } from "@shared/hook";
import { useMessage } from "@shared/store";

export const useDeleteNotice = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const [ isDelete, setIsDelete ] = useState( true );
    const setMessage = useMessage( state => state.setMessage );
    

    const deleteNotice = ( noticeIdx ) => {
        baseFetch(`notice/${noticeIdx}`, {method: "DELETE"}, cookieGet("token"));
    };

    useEffect( () => {
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                setIsDelete( false );
                break;

            case 400:
                setMessage("잠시후 다시 시도해주세요!")
                break;

            case 401:
                setMessage("본인만 삭제 할수 있습니다.");
                break;

            case 404:
                setMessage("이미 삭제된 알람입니다.");
                break;

            case 500:
                setMessage("500 서버에러");
                break;
        };

    },[ fetchData ]);

    return [ deleteNotice, isDelete];
}