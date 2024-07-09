import { useNavigate, useLocation } from "react-router-dom";
import { useGetAlarm } from "../api/useGetAlarm";

export const useModel = ()=>{
    const isAlarm = useGetAlarm();
    const navigate = useNavigate();
    const location = useLocation();
    const pathName = location.pathname;
    const onClickRoute = () => navigate(`complain?page=1`,{state: 1});

    return {isAlarm, onClickRoute, pathName};
}