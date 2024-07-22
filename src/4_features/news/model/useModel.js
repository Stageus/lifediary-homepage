import { useState } from "react";
import { useGetNewNotice } from "../api/useGetNewNotice";
import { useDeleteNotice } from "../api/useDeleteNotice";

/*
    "newComment": 내일기에 댓글이 달렸을 경우
    "newDiary": 구독자가 일기를 작성했을 경우
    "deletedMyDiary": 내일기가 신고받아 삭제되었을 경우
    "deletedDiary": 신고한일기가 삭제되었을 경우
    "recoveredDiary": 내일기가 복구되었을 경우
*/

export const useModel = () => {
    const [ isNew ] = useGetNewNotice();
    const [ deleteNotice ] = useDeleteNotice();
    const [ isOpenModal, setIsOpenModal ] = useState( false );
    const onClickOpen = () => setIsOpenModal( !isOpenModal );

    return { isNew, isOpenModal, onClickOpen, deleteNotice};
}