import { useDeleteDiary } from "../api/useDeleteDiary";

export const useModel = ( diaryIdx ) => {
    const [ deleteDiary ] = useDeleteDiary();

    const onClickConfirm = () => {
        const ConFirm = confirm("해당 일기를 삭제하시 겠습니까?");
        if ( !ConFirm ) return;
        deleteDiary(diaryIdx);
    }

    return { onClickConfirm };
}