import { useNavigate } from "react-router-dom";
import { useGetDiaryList } from "../api/useGetDiaryList";
import { parseTime } from "@shared/util";
import { useScroll } from "@shared/hook";
import { useEffect } from "react";


/*
    useParams로 판단하여 diaryidx가 없다면
    getDiaryList() 로요청하고
    
    diaryIdx가 있다면
    getDiaryList(diaryidx) 요청하며

    lastScroll이 변화했다면 이름감지하여,
    nextPage()를 호출한다.
    nextPage로 호출하는것은 diaryIdx가 없이 요청되어야하고, 랜덤이다
*/
export const useModel = ()=>{
    const [diaryList, nextPage] = useGetDiaryList();
    const [lastScroll, scrollRef, onScrollNext, onScrollReset] = useScroll();
    const navigate = useNavigate();

    const onClickRoute = (isMine, accountIdx) => {
        if(!isMine) return navigate(`/userpage/${accountIdx}/mine`);

        navigate(`/mypage/mine`);
    };

    const onClickTimeRoute = (createdAt, diaryIdx) => {
        const currentDate = new Date();

        if(parseTime(currentDate) !== parseTime(createdAt)){
            alert("일기는 작성한 당일에만 수정할수 있습니다.");
            return;
        };

        navigate(`/diaryUpload/${diaryIdx}`);
    };

    useEffect(()=>{
        if(lastScroll){
            nextPage();
            onScrollReset();
        }

    },[lastScroll])


    return {diaryList, onClickRoute, onClickTimeRoute, scrollRef, onScrollNext};
}







/*
    const [lastScroll, scrollRef, onScrollNext, onScrollReset] = useScroll();

  // useEffect(()=>{
  //   if (lastScroll && scrollRef.current) {
  //     scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  //   }
  // },[diaryList])

  // if(lastScroll){
  //   console.log("마지막에 도달했으니 한번더 리스트요청")
  //   nextPage();
  //   onScrollReset();
  // }
  // // console.log("무한루프 방지");

*/ 
