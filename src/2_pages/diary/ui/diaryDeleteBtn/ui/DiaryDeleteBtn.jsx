// Slice
import { useDeleteDiary } from "../api/useDeleteDiary";
// Layer
import { DefaultBtn } from "@shared/ui";
import { useMessage } from "@shared/store";


export const DiaryDeleteBtn = ( props ) => {
    
    const { diaryIdx } = props;
    const [ deleteDiary ] = useDeleteDiary();
    const setMessage = useMessage( state => state.setMessage );
    
    return(
        <DefaultBtn
        text="일기삭제"
        size="medium"
        onClick={()=> setMessage("해당 일기를 삭제하시 겠습니까?", ()=>deleteDiary(diaryIdx), true )}
        />
    );
}