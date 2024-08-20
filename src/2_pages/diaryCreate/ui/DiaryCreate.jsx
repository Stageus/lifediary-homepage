// Slice
import { usePostDiary } from "../api/usePostDiary";
// Layer
import { DiarySet } from "@widgets/diarySet";

export const DiaryCreate = () => {

    const [ postDiary ] = usePostDiary();

    return(
        <DiarySet submit={ postDiary }/>
    );
}