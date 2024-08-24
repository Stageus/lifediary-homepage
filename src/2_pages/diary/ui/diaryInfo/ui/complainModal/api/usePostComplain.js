// Npm
import { useEffect } from "react";
// Layer
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { useAlarm } from "@shared/store";
import { useMessage } from "@shared/store";
import { complainContentValidation } from "@shared/consts/validation";

export const usePostComplain = ( onClickModal ) => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const alarmText = useAlarm( state => state.alarmText );
    const setMessage = useMessage( state => state.setMessage );
    const { errorRoute, loginRoute } = useRoute();

    const onClickSubmit = ( diaryidx, complainText ) => {
        if ( !complainContentValidation(complainText) ) return setMessage("신고내용은 최소 3자 ~ 최대 300자 입니다.");
        onClickModal();
        baseFetch(`report?diaryIdx=${diaryidx}`, {method: "POST", data:{textContent:complainText}}, cookieGet("token"));
    };

    useEffect(() => {
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                alarmText("신고가 접수되었습니다");
                break;

            case 400:
                setMessage("해당일기는 신고할수 없습니다");
                break;

            case 401:
                setMessage("로그인이 필요한 서비스입니다.\n로그인화면 으로 이동하시겠습니까?", loginRoute, true );
                break;

            case 404:
                setMessage("해당일기는 존재하지않아 신고할수 없습니다.");
                break;

            case 500:
                errorRoute(500, "서버에러");
                break;
        }

    },[ fetchData ]);

    return [ onClickSubmit ];
}