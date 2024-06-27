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
                {grassList?.map((value, idx)=>{
                    return (
                        <S.DayOfWeekList key={idx}>
                            <S.Dayofweek>{Object.keys(value)}</S.Dayofweek>
                            <S.GrassList>
                                {value[Object.keys(value)]?.map((value, idx)=>{
                                    return(
                                        <S.GrassItem $isExist={value} key={idx} data-date={value?.date}>
                                            {findFirstDay(value?.date) ? <S.MonthItem>{findFirstDay(value?.date)}</S.MonthItem> : ""}
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
