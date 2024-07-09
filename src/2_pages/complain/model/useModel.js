import { useGetComplainList } from "../api/useGetComplainList";


export const useModel = ()=>{
    const [complainList, currentPage, changePage] = useGetComplainList();

    const onClickNum = (num) => {
        changePage(num);
    };

    const onClickLeft = () => {
        if(+currentPage() === 1) return;
        changePage(+currentPage() - 1)
    };

    const onClickRight = () => {
        if(complainList.reportCnt === currentPage()) return;
        changePage(+currentPage() + 1);
    };

    return {currentPage, complainList, onClickNum, onClickLeft, onClickRight}
}