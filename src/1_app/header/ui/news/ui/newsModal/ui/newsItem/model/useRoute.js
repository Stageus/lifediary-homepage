import { useNavigate } from "react-router-dom";

export const useRoute = () => {

    const navigate = useNavigate();
    const onClickRoute = ( diaryIdx ) => navigate(`/diary/${diaryIdx}`);

    return { onClickRoute };
}