import { useEffect } from "react";
import { useFetch, useCookie } from "@shared/hook";

export const useDeleteDiary = ()=>{
    const [ fetchData, baseFetch ] = useFetch();
    const { handleGetCookie } = useCookie();

    const onClickConfirm = () => {
        const ConFirm = confirm("해당 일기를 삭제하시 겠습니까?");
        if ( !ConFirm ) return;
        deleteDiary(diaryIdx);
    };

    const deleteDiary = ( diaryIdx ) => {
        baseFetch(`diary/${diaryIdx}`, {method: "DELETE"}, handleGetCookie());
    };

    useEffect(()=>{
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                console.log("다른곳으로 리다이렉트");
                break;

            case 400:
                console.log("유효성 감시 실패일 경우");
                break;

            case 401:
                console.log("토큰이 잘못된 경우(없는경우)");
                break;

            case 403:
                console.log("해당 일기의 주인이 아닌경우");
                break;

            case 404:
                console.log("대상으로 하는 diaryIdx가 없는경우");
                break;

            case 500:
                console.log("서버에러");
                break;
        }

    },[ fetchData ])

    return [ onClickConfirm ];
}