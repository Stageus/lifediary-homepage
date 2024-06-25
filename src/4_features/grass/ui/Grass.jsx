import { S } from "./style";
import { DefaultBtn } from "@shared/ui";

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
                        date: `${allYears}-${mongthLength}-${dayLength}-14:00:00`,
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
                    date: `${allYears}-${mongthLength}-${dayLength}-14:00:00`,
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
                    date: `${selectYears}-${mongthLength}-${dayLength}-14:00:00`,
                    color: "blue",
                });
                diaryIdx++;
            }
        }
    }
    return grassList;
};

export const Grass = () => {

console.log(createTestData());

  return (
    <>
      <S.Container>
        <S.YearsBtn>
          <DefaultBtn text={2024} />
          <DefaultBtn text={2023} />
          <DefaultBtn text={2022} />
        </S.YearsBtn>
        <S.Grass>
        <S.MonthList>
              <div>1월</div>
              <div>2월</div>
              <div>3월</div>
              <div>4월</div>
              <div>5월</div>
              <div>6월</div>
              <div>7월</div>
              <div>8월</div>
              <div>9월</div>
              <div>10월</div>
              <div>11월</div>
              <div>12월</div>
        </S.MonthList>
        <S.DaysList>
            <S.DayItem>월</S.DayItem>
            <S.DayItem>화</S.DayItem>
            <S.DayItem>수</S.DayItem>
            <S.DayItem>목</S.DayItem>
            <S.DayItem>금</S.DayItem>
            <S.DayItem>토</S.DayItem>
            <S.DayItem>일</S.DayItem>
          </S.DaysList>
          <S.GrassList>
              {/* {value.map((value,idx) => {
                return <S.GrassItem $color={value.color} key={idx} />;
              })} */}
            </S.GrassList>
        </S.Grass>
      </S.Container>
    </>
  );
};
