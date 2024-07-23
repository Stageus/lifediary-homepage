// Slice
import { S } from "./style";
import { GrassItem } from "./grassItem/ui";
import { useGetGrassList } from "../api/useGetGrassList";
import { useYearsList } from "../model/useYearsList";
// Layer
import { DefaultBtn } from "@shared/ui";

export const Grass = () => {
    
    const [ grassList, onClickYears, isLoading ] = useGetGrassList();
    const { yearsList  } = useYearsList();

    return (
        <>
        <S.GrassWrap>
            {/* Grass 년도 버튼리스트 */}
            <S.YearList>
                {yearsList.map(( year,idx ) => {
                    return(
                    <div key={ idx }>
                        <DefaultBtn
                            onClick={ () => onClickYears( year ) }
                            text={ year }
                            />
                    </div>
                    );
                })}
            </S.YearList>
            {/* Grass 각 요소 리스트 */}
            
            { isLoading 
            ? <S.Loading>로딩중....</S.Loading> 
            : <S.Grass>            
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
            </S.Grass>}
            
        </S.GrassWrap>
        </>
  );
};


