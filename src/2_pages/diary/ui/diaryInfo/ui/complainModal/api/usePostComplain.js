import { useEffect } from "react";
import { useFetch, useCookie } from "@shared/hook";
import { useAlarm } from "@shared/store";

export const usePostComplain = ( onClickModal ) => {
    const [ fetchData, baseFetch ] = useFetch();
    const { handleGetCookie } = useCookie();
    const alarmText = useAlarm( state => state.alarmText );

    const onClickSubmit = ( diaryidx, complainText ) => {
        if ( !complainText ) return;
        baseFetch(`report?diaryIdx=${diaryidx}`, {method: "POST", data:{textContent:complainText}}, handleGetCookie());
    };

    useEffect(() => {
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                onClickModal();
                alarmText("신고가 접수되었습니다");
                break;

            case 400:
                console.log("유효성 검사 실패일 경우");
                break;

            case 401:
                console.log("토큰이 잘못된 경우 (없는경우)");
                break;

            case 404:
                console.log("대상으로하는 diaryIdx가 없는 경우");
                break;

            case 500:
                console.log("서버에러");
                break;
        }

    },[ fetchData ]);

    return [ onClickSubmit ];
}