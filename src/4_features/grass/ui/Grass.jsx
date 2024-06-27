import { S } from "./style";
import { findFirstDay } from "../lib/findFirstDay";
import { useGetGrassList } from "../api/useGetGrassList";
import { DefaultBtn } from "@shared/ui";

export const Grass = () => {
        const [grassList, setSelectYear] = useGetGrassList();
        const nowYears = new Date().getFullYear();
        const yearsList = Array(3).fill(nowYears).map( (value, idx) => value - idx);
        const onClickYears = (year)=> setSelectYear(year);

  return (
    <>
    <S.GrassContainer>
        <S.YearBtnList>
            {yearsList.map((year,idx)=>{
                return(
                    <DefaultBtn
                    onClick={()=>onClickYears(year)}
                    key={idx}
                    text={year}
                    />
                );
            })}
        </S.YearBtnList>
        <S.Grass>            
                {grassList?.map((dayOfWeek, idx)=>{
                    return (
                        <S.DayOfWeekList key={idx}>
                            <S.Dayofweek>{Object.keys(dayOfWeek)}</S.Dayofweek>
                            <S.GrassList>
                                {dayOfWeek[Object.keys(dayOfWeek)]?.map((day, idx)=>{
                                    return(
                                        <S.GrassItem $isExist={day?.color} key={idx} data-date={day?.date}>
                                            {findFirstDay(day?.date) ? <S.MonthItem>{findFirstDay(day?.date)}</S.MonthItem> : ""}
                                        </S.GrassItem>
                                    );
                                })}
                            </S.GrassList>
                        </S.DayOfWeekList>
                    );
                })}
        </S.Grass>
    </S.GrassContainer>
    </>
  );
};
