import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetDiaryList } from "../api/useGetDiaryList";


export const useModel = ()=>{
    const [diaryList, addPage] = useGetDiaryList();
    const [postionUnit, setPostionUnit] = useState(0);
    const navigate = useNavigate();
    const onClickRoute = (diaryIdx) => navigate(`diary/${diaryIdx}`);

    
    const onClickLeft = () => {
        if (!postionUnit) return;
        setPostionUnit(postionUnit + 1);
      };

      const onClickRight = () => {
        if (diaryList.length - 1 === -postionUnit) addPage();
        setPostionUnit(postionUnit - 1);
      };


    return {postionUnit, diaryList, onClickLeft, onClickRight, onClickRoute}
}