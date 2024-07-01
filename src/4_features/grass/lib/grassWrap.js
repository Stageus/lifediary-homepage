export const grassWrap = (grassList)=>{
    const daysOfWeek = ["일","월","화","수","목","금","토"];
    const result = {
        "일":[],
        "월":[],
        "화":[],
        "수":[],
        "목":[],
        "금":[],
        "토":[],
    };
    for(let grass of grassList){
        const grassDay = new Date(grass.date).getDay();
        const dayName = daysOfWeek[grassDay];
        result[dayName].push(grass);
    }

    /*
        1년기준
        윤달미포함 365
        윤달포함 366
        윤달미포함 오늘기준 366
        윤달포함 오늘기준 367

        # 1년기준 - 윤달 미포함
        년초 시작 요일과, 년말 끝 요일이 일치하므로 365일
        ex) 2023-01-01(일) ~ 2023-12-31(일)

        # 1년기준 + 윤달 포함
        년초 시작 요일에서 년말 끝 요일에 + 1되어 366일
        ex) 2024-01-01(월) ~ 2024-12-31(화)

        일
        월
        화
        수
        목
        금
        토

        # 오늘기준 과거 1년 + 윤달 포함
        오늘기준 요일에서 -2되어 367
        ex) 2024-07-01(월) ~ 2023-07-01(토)

        # 오늘기준 과거 1년 - 윤달 미포함
        오늘기준 요일에서 -1되어 366
        ex) 2023-07-01(토) ~ 2022-07-01(금)
    
    */
    const resultWrap = Object.keys(result).map( day => ({[day]:result[day]}));
    const dayIndex = resultWrap.findLastIndex((day) => day[Object.keys(day)[0]].length === 53);
    
    if(grassList.length === 366){
        for(let i = 0 ; i < dayIndex - 1 ; i++) resultWrap[i][daysOfWeek[i]].unshift(null);
    }else{
        for(let i = 0 ; i < dayIndex ; i++) resultWrap[i][daysOfWeek[i]].unshift(null);
    }
    return resultWrap;
};