import { useNavigate } from "react-router-dom";

export const useRoute = () => {

    const navigate = useNavigate();
    const onClickRoute = ( accountidx ) => navigate(`/userpage/${accountidx}/mine`);

    return { onClickRoute }; 
}