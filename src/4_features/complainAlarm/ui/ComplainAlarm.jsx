import { S } from "./style";
import { useModel } from "../model/useModel";
import { DefaultBtn, Icon } from "@shared/ui";

export const ComplainAlarm = () => {
    const {isAlarm, onClickRoute, pathName} = useModel();

    return(
        <>
            <S.ComplainAlarm>
                <DefaultBtn
                text="신고 보기"
                onClick={onClickRoute}
                type={ pathName === "/complain" ? "select" : null}
                />
                {isAlarm 
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