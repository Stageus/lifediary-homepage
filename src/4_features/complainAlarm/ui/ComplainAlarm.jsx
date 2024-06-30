import { S } from "./style";
import { DefaultBtn, Icon } from "@shared/ui";

export const ComplainAlarm = () => {
    return(
        <>
            <S.ComplainAlarm>
                <DefaultBtn
                text="신고 보기"
                />
                <S.Alarm>
                    <Icon
                    type="alarm"
                    color="white"
                    />
                </S.Alarm>
            </S.ComplainAlarm>
        </>
    );
}