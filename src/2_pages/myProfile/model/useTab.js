import { useState } from "react";
import { useGetMyDiary } from "../api/useGetMyDiary";

export const useTab = () => {

    const [ diaryList, setDiaryList ] = useState( null );

    const selectTab = ( start, end, labelIdx ) => {
            console.log("start:",start)
            console.log("end:",end)
            console.log("labelIdx:",labelIdx)
    };

    return { diaryList, setDiaryLis, selectTab };
}