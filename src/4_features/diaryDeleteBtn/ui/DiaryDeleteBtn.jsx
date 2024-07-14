import { DefaultBtn } from "@shared/ui";
import { useModel } from "../model/useModel";

export const DiaryDeleteBtn = ( diaryIdx ) => {
    const { onClickConfirm } = useModel( diaryIdx );
    
    return(
        <DefaultBtn
        text="일기삭제"
        onClick={onClickConfirm}
        />
    );
}