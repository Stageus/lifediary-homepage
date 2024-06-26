import { S } from "./style";
import { grassWrap } from "../lib/grassWrap";
import { findFirstDay } from "../lib/findFirstDay";
import { createTestData } from "../model/createTestData";


export const Grass = () => {
        const grassList = grassWrap(createTestData());
  return (
    <>
        <S.Grass>            
                {grassList.map((value, idx)=>{
                    return (
                        <S.DayOfWeekList key={idx}>
                            <S.Dayofweek>{Object.keys(value)}</S.Dayofweek>
                            <S.GrassList>
                                {value[Object.keys(value)].map((value, idx)=>{
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
    </>
  );
};
