import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useModel = () => {

    const [ hover, setHover ] = useState( false );
    const onMuouserOver = () => setHover( true );
    const onMouserOut = () => setHover( false );
    const navigate = useNavigate();
    const onClickRoute = ( diaryIdx )=> navigate(`diary/${diaryIdx}`);

    return { hover, onMuouserOver, onMouserOut, onClickRoute }
};