import { useNavigate } from "react-router-dom";

export const useModel = ()=>{
    const navigate = useNavigate();
    const onClickRoute = () => navigate("diary");

    return {onClickRoute}
}