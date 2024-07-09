import { useNavigate, useLocation } from "react-router-dom";

export const useModel = ()=>{
    const location = useLocation();
    const pathname = location.pathname;
    const navigate = useNavigate();
    const onClickRoute = (path) => navigate(path);


    return {pathname, onClickRoute};
}