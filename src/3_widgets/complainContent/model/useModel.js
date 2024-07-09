import { useNavigate } from "react-router-dom";
import { useGetComplainList } from "../api/useGetComplainList";

export const useModel = ()=>{
    const [complainList, page, changePage] = useGetComplainList();
    const navigate = useNavigate();

    const onClickNum = (num) => {
        changePage(num);
    };

    const onClickLeft = () => {
        if(page === 1) return;
        changePage(page - 1)
    };

    const onClickRight = () => {
        if(complainList.reportCnt === page) return;
        changePage(page + 1);
    };

    return {complainList, page, onClickNum, onClickLeft, onClickRight}
}