import { DefaultBtn } from "@shared/ui";
import { useDeleteDiary } from "../api/useDeleteDiary";

export const DiaryDeleteBtn = ( diaryIdx ) => {

    const [ onClickConfirm ] = useDeleteDiary();
    
    return(
        <DefaultBtn
        text="일기삭제"
        onClick={()=> onClickConfirm( diaryIdx )}
        />
    );
}