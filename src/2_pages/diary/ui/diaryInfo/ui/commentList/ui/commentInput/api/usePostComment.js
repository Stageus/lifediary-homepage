// Npm
import { useRef, useEffect } from "react";
// Layer
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { useMessage } from "@shared/store";
import { commentValidation } from "@shared/consts/validation";


export const usePostComment = ( changeComment ) => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const { loginRoute } = useRoute();
    const setMessage = useMessage( state => state.setMessage );
    const saveValueRef = useRef("");

    const onClickCommentSubmit = ( diaryIdx, commentContent) => {
        if ( !commentValidation(commentContent) ) return setMessage("댓글은 최소 3자 이상 ~ 300자 이하 입니다.");

        saveValueRef.current = commentContent;
        baseFetch(`comment?diaryIdx=${diaryIdx}`, {method:"POST", data:{"textContent":commentContent}}, cookieGet("token"));
    };

    useEffect(()=>{
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                const profileImg = cookieGet("profile");
                const date = new Date();
                const newCommentIdx = fetchData.data.insertedIdx;
                
                changeComment( prevState => [...prevState, {
                    idx: newCommentIdx,
                    profileImg, 
                    nickname:"방금 작성한 댓글", 
                    createdAt: date, 
                    textContent: saveValueRef.current,
                    isMine: true,
                    isParent: true,
                    isReplied: false,
                }])
                break;

            case 400:
                setMessage("올바르지 않은 형식입니다");
                break;

            case 401:
                setMessage("로그인이 필요한 서비스입니다.\n로그인창으로 이동하시겠습니까?", loginRoute, true);
                break;

            case 404:
                setMessage("존재하지 않은 일기입니다.");
                break;

            case 500:
                setMessage("예상하지 못한 일이 발생했습니다.\n잠시후 다시시도 해주세요.");
                break;
        }

    },[ fetchData ]);

    return [ onClickCommentSubmit ];
}