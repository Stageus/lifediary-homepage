import { useNavigate } from "react-router-dom";
import { S } from "./style";
import { useGetAlarm } from "../api/useGetAlarm";
import { DefaultBtn, Icon } from "@shared/ui";

export const ComplainAlarm = () => {
    const isAlarm = useGetAlarm();
    const navigate = useNavigate();
    const onClickRoute = () => navigate("complain");

    return(
        <>
            <S.ComplainAlarm>
                <DefaultBtn
                text="신고 보기"
                onClick={onClickRoute}
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