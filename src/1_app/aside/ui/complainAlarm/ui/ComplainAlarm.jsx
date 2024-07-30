// Slice
import { S } from "./style";
import { useCurrentPage } from "../model/useCurrentPage";
import { useRoute } from "../model/useRoute";
import { useGetAlarm } from "../api/useGetAlarm";
// Layer
import { DefaultBtn, Icon } from "@shared/ui";

export const ComplainAlarm = () => {

    const [ isNew ] = useGetAlarm();
    const { onClickRoute } = useRoute();
    const { pathName } = useCurrentPage();

    return(
        <>
            <S.ComplainAlarm>
                <DefaultBtn
                text="신고 보기"
                onClick={ onClickRoute }
                type={ pathName === "/complain" ? "select" : null}
                />

                {isNew 
                ? <S.Alarm>
                    <Icon
                    type="alarm"
                    color="white"
                    />
                </S.Alarm> 
                : null}
            </S.ComplainAlarm>
        </>
    );
}