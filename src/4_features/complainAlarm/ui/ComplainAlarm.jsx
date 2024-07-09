import { useNavigate, useLocation } from "react-router-dom";
import { S } from "./style";
import { useGetAlarm } from "../api/useGetAlarm";
import { DefaultBtn, Icon } from "@shared/ui";

export const ComplainAlarm = () => {
    const isAlarm = useGetAlarm();
    const navigate = useNavigate();
    const location = useLocation();
<<<<<<< HEAD
    const onClickRoute = () => navigate("complain");
=======
    const onClickRoute = () => navigate(`complain?page=1`,{state: 1});
>>>>>>> 4bb674ee3506e5e58bb2cb6259937d1cd8fa235e

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