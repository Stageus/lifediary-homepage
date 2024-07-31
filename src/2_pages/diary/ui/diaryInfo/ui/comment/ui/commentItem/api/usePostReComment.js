import { useFetch, useCookie } from "@shared/hook";

export const usePostReCommnet = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const { handleGetCookie } = useCookie();

    const postReComment = ( parentCommentIdx, textContent ) => {
        baseFetch(`comment/${parentCommentIdx}/reply`,{method:"POST", data:textContent}, handleGetCookie());
    }

    useFetch(()=>{
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                break;

            case 400:
                console.log("유효성 검사 실패일 경우");
                break;

            case 401:
                console.log("토큰이 잘못된 경우 ( 없는 경우 )");
                break;

            case 403:
                console.log("해당 일기의 주인이 아닌 경우");
                break;

            case 404:
                console.log("대상으로 하는 parentCommentIdx 가 없는 경우");
                break;

            case 500:
                console.log("서버에러");
                break;

        }

    },[fetchData])

    return [ postReComment ];
}