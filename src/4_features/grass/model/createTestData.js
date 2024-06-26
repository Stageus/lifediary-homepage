// 년도와 월을 받아 해당 월의 마지막 일을 반환
const lastDay = (years, month)=>{
    return new Date(years, month, 0).getDate();
}

// 랜덤 색상을 선택하는 함수
const getRandomColor = () => {
    const colors = ["blue", "green", "red", "yellow"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// 임시 데이터 생성용
export const createTestData = (years)=>{
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
                        color: getRandomColor(),
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
                    color: getRandomColor(),
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
                    color: getRandomColor(),
                });
                diaryIdx++;
            }
        }
    }
    return grassList;
};

