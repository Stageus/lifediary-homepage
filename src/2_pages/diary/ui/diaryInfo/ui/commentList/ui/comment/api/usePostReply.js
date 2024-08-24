import { useState, useRef, useEffect } from "react";
import { useFetch, useCookie } from "@shared/hook";

export const usePostReply = ( onClickOpenReply ) => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const saveValueRef = useRef("");
    const [ newReplyInfo, setNewReplyInfo ] = useState(null);

    const deleteNowReply = () => {
        setNewReplyInfo( null );
    }

    const postReply = ( parentCommentIdx, textContent ) => {
        saveValueRef.current = textContent;
        baseFetch(`comment/${parentCommentIdx}/reply`,{method:"POST", data:{"textContent":textContent}}, cookieGet("token"));
    };

    useEffect(()=>{
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:

                const profileImg = cookieGet("profile");
                const date = new Date();
                const resCommentIdx = fetchData.data.insertedIdx;
                
                onClickOpenReply();
                setNewReplyInfo({
                    idx: resCommentIdx,
                    profileImg, 
                    nickname:"내가쓴 답글", 
                    createdAt: date, 
                    textContent: saveValueRef.current,
                    isMine: true,
                    isParent: false,
                    isReplied: true,
                })
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

    return [ postReply, deleteNowReply, newReplyInfo ];
}