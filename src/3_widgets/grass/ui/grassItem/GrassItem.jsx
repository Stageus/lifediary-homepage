import { S } from "./style";
import { useModel } from "./model/useModel";
import { findFirstDay } from "../../lib/findFirstDay";

export const GrassItem = (props)=>{
    const { day } = props;
    const {hover, onMuouserOver, onMouserOut, onClickRoute} = useModel();

    return(
        <>
        {day?.idx ? (<S.GrassItem 
        $isExist={day?.color} 
        $date={day?.date}
        onMouseOver={onMuouserOver}
        onMouseOut={onMouserOut}
        onClick={()=>onClickRoute(day?.idx)}
        >
            {findFirstDay(day?.date) 
                ? <S.MonthItem>{findFirstDay(day?.date)}</S.MonthItem> 
                : null}
            
            {/* 
                [추후 수정예정]
                parseTime 을 적용하여 초는 안나오게 해야함
            */}
            {hover ? <S.GrassItemInfo>{day?.date}</S.GrassItemInfo> : null}
        </S.GrassItem>): <S.GrassItem/>}
        </>
    );
};
