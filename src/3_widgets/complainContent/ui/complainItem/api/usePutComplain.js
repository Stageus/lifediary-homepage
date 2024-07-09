import { useEffect } from "react";
import { useFetch, useCookie } from "@shared/hook";
import { useActionData } from "react-router-dom";

export const usePutComplain = () => {
    const { handleGetCookie } = useCookie();
    const [_, status, baseFetch] = useFetch();

    const putComplain = (complainIdx,isInvalid)=>{
        // 임시주석
        // baseFetch(`report/:${complainIdx}/status`,{isInvalid},handleGetCookie());
    }

useEffect(()=>{
    if(status === 200){
        // modal 안내 or 부모 상태변경 대기
        return console.log("성공처리");
    }

    if(status === 400){
        return console.log("유효성 검사 실패일 경우");
    }

    if(status === 401){
        return console.log("토큰이 잘못된경우, 없는경우")
    }

    if(status === 403){
        return console.log("관리자가 아닐경우")
    }

    if(status === 404){
        return console.log("대상으로 하는 idx가 없는경우")
    }

    if(status === 500){
        return console.log("서버 에러")
    }

},[status])


return [putComplain]

}