import { useLocation } from "react-router-dom";
import { S } from "./style";

export const NotFound = () => {

    const loaction = useLocation();
    
    return(
        <S.notFound>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM2R3t1hvkNH861JHl3lKcY24V_U5RC_eAtg&s"}/>
            <h1> 404 </h1>
            <span>
                { loaction.state ?? "페이지를 찾을수 없습니다."}
            </span>
        </S.notFound>
    );
}