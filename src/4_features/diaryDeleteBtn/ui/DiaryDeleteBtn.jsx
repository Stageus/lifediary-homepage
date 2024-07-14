import { DefaultBtn } from "@shared/ui";
import { useModel } from "../model/useModel";

export const DiaryDeleteBtn = () => {
    const {} = useModel();
    return(
        <DefaultBtn
        text="일기삭제"
        />
    );
}