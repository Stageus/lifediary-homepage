// Slice
import { S } from "./style";
import { usePostDiary } from "../api/usePostDiary";
// Layer
import { DiarySet } from "@widgets/diarySet";

export const DiaryCreate = () => {

    const [ postDiary ] = usePostDiary();

    return(
        <S.diaryCreate>
            <S.componentsTitle>오늘은 어떤일기를 작성하시나요?</S.componentsTitle>
            <DiarySet submit={ postDiary }/>
        </S.diaryCreate>
    );
}