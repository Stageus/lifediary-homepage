import { useEffect } from "react";
import { useFetch, useCookie } from "@shared/hook";

export const useDeleteDiary = ()=>{
    const [ fetchData, status, baseFetch ] = useFetch();
    const { handleGetCookie } = useCookie();

    const deleteDiary = (diaryIdx) => {
        baseFetch(`diary/${diaryIdx}`, {method: "DELETE"}, handleGetCookie());
    };

    useEffect(()=>{

        if(status === 200){
            return console.log("다른곳으로 리다이렉트");
        }
        if(status === 400){
            return console.log("유효성 감시 실패일 경우");
        }
        if(status === 401){
            return console.log("토큰이 잘못된 경우(없는경우)");
        }
        if(status === 403){
            return console.log("해당 일기의 주인이 아닌경우");
        }
        if(status === 404){
            return console.log("대상으로 하는 diaryIdx가 없는경우");
        }
        if(status === 500){
            return console.log("서버에러");
        }

    },[fetchData])

    return [ deleteDiary ];
}