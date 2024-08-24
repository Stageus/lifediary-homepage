// Npm
import { useState, useRef, useEffect } from "react";
// Layer
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { useMessage } from "@shared/store";

export const usePutCommnetOrReply = ( prevContentText, onClickOpenCommentInput, onClickOpenReplyInput ) => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie(); 
    const { loginRoute } = useRoute();
    const setMessage = useMessage( state => state.setMessage );

    const saveTextRef = useRef("");
    const contentTypeRef = useRef("");
    const [ commentText, setCommentText ] = useState( prevContentText ?? "");
    const [ replyText, setReplyText ] = useState( null );
    
    const putCommentOrReply = ( commentIdx, textContent, type ) => {
        saveTextRef.current = textContent;
        contentTypeRef.current = type;
        baseFetch(`comment/${commentIdx}`,{method: "PUT", data:{"textContent":textContent}}, cookieGet("token"));
    };

    useEffect(()=>{
        if ( !fetchData ) return;

        const isTrue = contentTypeRef.current;
        
        switch ( fetchData.status ) {
            case 200:
                // 작성자일경우에 자신의 일기에 댓글을 작성하고,
                // 자신이 작성한 댓글에 답글을 작성했을경우가 있기때문에,
                // 타입에 따라 

                if ( isTrue ) {
                    onClickOpenCommentInput( false );
                    setCommentText( saveTextRef.current );
                    return;
                }

                onClickOpenReplyInput( false );
                setReplyText( saveTextRef.current )
                break;

            case 400:
                console.log("유효성 검사 실패일 경우");
                break;

            case 401:
                console.log("토큰이 잘못된 경우 ( 없는 경우 )");
                break;

            case 403:
                console.log("해당 댓글의 주인이 아닌 경우");
                break;

            case 404:
                console.log("대상으로 하는 commentIdx가 없는 경우");
                break;

            case 500:
                console.log("서버 내부 에러");
                break;
        }

    },[ fetchData ])

    return [ putCommentOrReply, commentText, replyText ];
}