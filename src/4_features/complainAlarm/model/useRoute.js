import { useNavigate } from "react-router-dom";

export const useRoute = () => {

    const navigate = useNavigate();
    const onClickRoute = () => navigate("/complain");

    return { onClickRoute };
}