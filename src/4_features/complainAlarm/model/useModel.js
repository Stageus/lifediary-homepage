import { useNavigate, useLocation } from "react-router-dom";
import { useGetAlarm } from "../api/useGetAlarm";

export const useModel = ()=>{
    const isAlarm = useGetAlarm();
    const navigate = useNavigate();
    const location = useLocation();
    const pathName = location.pathname;
    const onClickRoute = () => navigate("complain");

    return {isAlarm, onClickRoute, pathName};
}