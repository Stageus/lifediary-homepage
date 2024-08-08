import { useLocation } from "react-router-dom";
import { S } from "./style";
import { DefaultBtn } from "@shared/ui";
import { useRoute } from "@shared/hook";

export const Error = () => {

    const loaction = useLocation();
    const { homeRoute } = useRoute();
    const { status, message } = loaction?.state || {};
    
    return(
        <S.error>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM2R3t1hvkNH861JHl3lKcY24V_U5RC_eAtg&s"}/>
            <h1>{ status ?? 404}</h1>
            <span>
                { message ?? "페이지를 찾을수 없습니다."}
            </span>
            <S.btnWrap>
                <DefaultBtn
                text="홈으로 돌아가기"
                onClick={homeRoute}
                />
            </S.btnWrap>
        </S.error>
    );
}