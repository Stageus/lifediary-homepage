import { S } from "./style";
import { grassWrap } from "../lib/grassWrap";
import { findFirstDay } from "../lib/findFirstDay";

// 년도와 월을 받아 해당 월의 마지막 일을 반환
const lastDay = (years, month)=>{
    return new Date(years, month, 0).getDate();
}

// 임시 데이터 생성용
const createTestData = (years)=>{
    const selectYears = years ?? new Date().getFullYear();
    let diaryIdx = 1;
    const grassList = [];

    if(!years){
        let allYears = selectYears - 1;
        const currentMonth = new Date().getMonth() + 1;
        let selectMonthOfDay = new Date().getDate();
        for(let i = currentMonth ; i <= 12 ; i++){
                const monthOfLastDay = lastDay(allYears, i);
                for(let j = selectMonthOfDay ; j <= monthOfLastDay ; j++){
                    const mongthLength = String(i).padStart(2,"0");
                    const dayLength = String(j).padStart(2,"0");
                    grassList.push({
                        idx: diaryIdx,
                        date: `${allYears}-${mongthLength}-${dayLength} 14:00:00`,
                        color: "blue",
                    });
                    diaryIdx++;
                }
                selectMonthOfDay = 1;
            }
        allYears++;
        for(let i = 1 ; i <= currentMonth ; i++){
            const monthOfLastDay = lastDay(allYears, i);
            for(let j = 1 ; j <= monthOfLastDay ; j++){
                if(allYears === new Date().getFullYear() && i === currentMonth && j > new Date().getDate()){
                    return grassList;
                    }
                const mongthLength = String(i).padStart(2,"0");
                const dayLength = String(j).padStart(2,"0");
                grassList.push({
                    idx: diaryIdx,
                    date: `${allYears}-${mongthLength}-${dayLength} 14:00:00`,
                    color: "blue",
                });
                diaryIdx++;
            }
        }
        
    }else{
        for(let i = 1 ; i <= 12 ; i++){
            const monthOfLastDay = lastDay(selectYears, i);
            for(let j = 1 ; j <= monthOfLastDay ; j++){
                const mongthLength = String(i).padStart(2,"0");
                const dayLength = String(j).padStart(2,"0");
                grassList.push({
                    idx: diaryIdx,
                    date: `${selectYears}-${mongthLength}-${dayLength} 14:00:00`,
                    color: "blue",
                });
                diaryIdx++;
            }
        }
    }
    return grassList;
};



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
