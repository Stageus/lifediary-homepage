
// 해당 부분에서 fetch를 보내지말고

import { useEffect } from "react";

// zustand에서 get, post를 한번에 처리하는것이 좋을것같음
export const useGetSubscribeList = ()=>{
    // useState가 필요할듯하다. 해당 부분에서 zustand에서 요청한 데이터를 다시한번 받는걸로?
    

    useEffect(()=>{
        // zustand에 정의한 get요청에 대한 함수를 여기서 불러서 사용한다?

    // 상태가 추가되어도 렌더링이 발생하지 않도록
    },[])

    return "";
}