import { usePostDiary } from "../api/usePostDiary";
import { DiarySet } from "@widgets/diarySet";

export const DiaryCreate = () => {

    const [ postDiary ] = usePostDiary();

    
    return(
        <DiarySet submit={ postDiary }/>
    );
}