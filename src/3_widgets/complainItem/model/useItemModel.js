import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePutComplain } from "../api/usePutComplain";

export const useItemModel = (props)=>{
    const [itemState, setItemState] = useState(props);
    const navigate = useNavigate();
    const [putComplain] = usePutComplain();
    const onClickRoute = (diaryIdx) => navigate(`/diary/${diaryIdx}`);
    const changeState = (diaryIdx, isInvalid)=>{
        setItemState(isInvalid);
        putComplain(diaryIdx, isInvalid);
    }

    return {onClickRoute, itemState, changeState}
}