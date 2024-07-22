// Slice
import { S } from "./style";
import { GrassItem } from "./grassItem/ui";
import { useGetGrassList } from "../api/useGetGrassList";
// Layer
import { DefaultBtn } from "@shared/ui";

export const Grass = () => {
    
    const [ grassList, setSelectYear ] = useGetGrassList();
    const nowYears = new Date().getFullYear();
    const yearsList = Array( 3 ).fill( nowYears ).map( ( value, idx ) => value - idx );
    const onClickYears = ( year )=> setSelectYear( year );
    
    return (
        <>
        <S.GrassWrap>
            {/* Grass 년도 버튼리스트 */}
            <S.YearList>
                {yearsList.map(( year,idx ) => {
                    return(
                    <div key={ idx }>
                        <DefaultBtn
                            onClick={ ()=>onClickYears( year ) }
                            text={ year }
                            />
                    </div>
                    );
                })}
            </S.YearList>
            {/* Grass 각 요소 리스트 */}
            <S.Grass>            
                    {grassList?.map( ( dayOfWeek, idx ) => {
                        return (
                            <S.DayOfWeekItem key={ idx }>
                                <S.DayName>{ Object.keys( dayOfWeek ) }</S.DayName>
                                <S.DayList>
                                    {dayOfWeek[Object.keys( dayOfWeek )]?.map(( day, idx )=>{
                                        return( 
                                            <GrassItem day={ day } key={ idx }/>
                                        );
                                    })}
                                </S.DayList>
                            </S.DayOfWeekItem>
                        );
                    })}
            </S.Grass>
        </S.GrassWrap>
        </>
  );
};


