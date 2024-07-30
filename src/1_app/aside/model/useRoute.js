import { useNavigate } from "react-router-dom";

export const useRoute = () => {

    const navigate = useNavigate();
    const onClickRoute = ( path ) => navigate( path );

    return { onClickRoute };
}