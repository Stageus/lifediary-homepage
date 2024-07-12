import { useNavigate } from "react-router-dom";
import { useGetDiaryList } from "../api/useGetDiaryList";
import { parseTime } from "@shared/util";

export const useModel = ()=>{
    const [diaryList, nextPage] = useGetDiaryList();
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


    return {diaryList, onClickRoute, onClickTimeRoute};
}


/*
    현재의 문제점
    메인페이지에서는 자신의 리스트가 보이지 않는다
    자신의 일기를 수정 or 삭제를 하려면 메인페이지에서 수정과 삭제 버튼을 출력해야하는데
    그렇기에 잔디요소 클릭 or 마이페이지의 내일기들을 클릭해서 올수가 있다
    수정같은경우는 하루가 지난시점에서 비활성화를 하거나, 숨기면 문제가 되지않음
    삭제또한 문제가 되지 않는다.
    그렇다면 요소를 클릭후 스크롤하면? 바로 다음 일기리스트를 보여준다?
    문제가 안될까 ?

    문제가 될것같다.

    자신의 일기를 볼때가 문제가된다.

    1. 프로필을 클릭하면 자신의 페이지로 가야하고,
    2. 구독버튼은 숨겨야한다
    3. 일기수정 과  일기삭제 버튼을 보여주어야한다.

    이때 해당 일기가 자신인것을 판단해야하는데

    어차피 메인페이지에서는  특정일기를 포함한 리스트를 서버에서 반환해주는데

    이 특정일기를 나의 일기인지를 판단하려면
    특정일기 리스트는 유저의 idx가 필요함
    그래야 내Token정보에 요청하여 나의 idx
    그리고 일기의 idx 여부에 따라 구독버튼, 수정,삭제 여부를 표시해야한다

*/