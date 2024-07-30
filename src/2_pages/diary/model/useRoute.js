import { useNavigate } from "react-router-dom";

export const useRoute = () => {

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

    return { onClickRoute, onClickTimeRoute }; 
}