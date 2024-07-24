// Npm
import { useNavigate, useLocation } from "react-router-dom";
// Slice
import { S } from "./style";
import { useGetAlarm } from "../api/useGetAlarm";
// Layer
import { DefaultBtn, Icon } from "@shared/ui";

export const ComplainAlarm = () => {

    const isAlarm = useGetAlarm();
    const navigate = useNavigate();
    const location = useLocation();
    const pathName = location.pathname;
    const onClickRoute = () => navigate("/complain");

    return(
        <>
            <S.ComplainAlarm>
                <DefaultBtn
                text="신고 보기"
                onClick={ onClickRoute }
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