import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetDiaryList } from "../api/useGetDiaryList";
import { parseTime } from "@shared/util";
import { useScroll } from "@shared/hook";

export const useModel = ()=>{
    const [diaryList, nextPage] = useGetDiaryList();
    const [lastScroll, scrollRef, onScrollNext, onScrollReset] = useScroll();
    const navigate = useNavigate();

    const onClickRoute = ( isMine, accountIdx ) => {
        if ( !isMine ) return navigate(`/userpage/${accountIdx}/mine`);

        navigate(`/mypage/mine`);
    };

    const onClickTimeRoute = ( createdAt, diaryIdx ) => {
        const currentDate = new Date();

        if ( parseTime(currentDate) !== parseTime(createdAt) ){
            alert("일기는 작성한 당일에만 수정할수 있습니다.");
            return;
        };

        navigate(`/diaryUpload/${diaryIdx}`);
    };

    useEffect(()=>{

        if ( lastScroll ){
            nextPage();
            onScrollReset();
        }

    },[lastScroll])


    return { diaryList, onClickRoute, onClickTimeRoute, scrollRef, onScrollNext };
};