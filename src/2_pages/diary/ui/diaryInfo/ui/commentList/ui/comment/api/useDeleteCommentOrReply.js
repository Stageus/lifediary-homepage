// Npm
import { useState, useRef, useEffect } from "react";
// Layer
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { useMessage } from "@shared/store";

export const useDeleteCommentOrReply = ( deleteNowReply ) => {
 
    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const { loginRoute } = useRoute();
    const setMessage = useMessage( state => state.setMessage );

    const contentTypeRef = useRef("");
    const [ isDeleteComment, setIsDeleteComment ] = useState( false );
    const [ isDeleteReply, setIsDeleteReply ] = useState( false );

    const deleteCommentOrReply = ( commentIdx, type ) => {
        // true:댓글, false:답글
        contentTypeRef.current = type;
        setMessage(`해당${type ? "댓글" : "답글"}을 삭제하시겠습니까?`,()=>baseFetch(`comment/${commentIdx}`, {method: "DELETE"}, cookieGet("token")), true);
    };

    useEffect(()=>{
        if ( !fetchData ) return;

        const isTrue = contentTypeRef.current;

        switch ( fetchData.status ) {
            case 200:
                // 답글만 삭제되었다면
                if ( !isTrue ) {
                    deleteNowReply();
                    setIsDeleteReply(true);
                    return;
                }
                // 댓글이 삭제되었다면 답글도 함께 삭제
                setIsDeleteReply(true);
                setIsDeleteComment(true);
                break;

            case 400:
                setMessage("잠시 후 다시 시도해주세요!");
                break;

            case 401:
                setMessage("로그인이 필요한 서비스 입니다.\n로그인화면으로 이동하시겠습니까?", loginRoute, true);
                break;

            case 403:
                setMessage(`${isTrue ? "댓글" : "답글"} 작성자만 삭제할 수 있습니다.`)
                break;

            case 404:
                setMessage(`해당 ${isTrue ? "댓글" : "답글"} 은 존재하지 않습니다.`);
                break;

            case 500:
                setMessage("서버오류로 인해 삭제하지 못했습니다.\n잠시후 다시 시도해주세요");
                break;
        }

    },[fetchData]);

    return [ deleteCommentOrReply, isDeleteComment, isDeleteReply];
    
}