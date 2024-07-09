import { useNavigate, useLocation } from "react-router-dom";
import { S } from "./style";
import { useGetAlarm } from "../api/useGetAlarm";
import { DefaultBtn, Icon } from "@shared/ui";

export const ComplainAlarm = () => {
    const isAlarm = useGetAlarm();
    const navigate = useNavigate();
    const location = useLocation();
    const onClickRoute = () => navigate(`complain?page=1`,{state: 1});

    return(
        <>
            <S.ComplainAlarm>
                <DefaultBtn
                text="신고 보기"
                onClick={onClickRoute}
                type={ location.pathname === "/complain" ? "select" : null}
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