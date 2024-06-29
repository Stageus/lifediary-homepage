import { S } from "./style";
import {GrassItem} from "./grassItem/GrassItem";
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
                  <div key={idx}>
                      <DefaultBtn
                    onClick={()=>onClickYears(year)}
                    text={year}
                    />
                  </div>
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
                                    /*
                                    [추후 수정예정]
                                    api가 완성되고 난후에 day.idx를 key값으로 지정해야함,
                                    */
                                    return( 
                                        <GrassItem day={day} key={idx}/>
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


