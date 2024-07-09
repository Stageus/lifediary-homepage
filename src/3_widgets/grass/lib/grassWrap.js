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

        # 1년기준 - 윤년이 아닐경우 = 365일
        1년은 365일로써 52주하고 1일,
        각요일은 52개의 요일을가지고 년을 시작하는 요일에 + 1
        ex) 2023-01-01(일) ~ 2023-12-31(일) = 일:53 ...

        # 1년기준 - 윤년일 경우 = 366일
        1년은 366일로써 52주하고 2일,
        각요일은 52개의 요일을가지고 년을 시작하는 요일과 다음요일에 + 1
        ex) 2024-01-01(월) ~ 2024-12-31(화) = 월: 53 화:53

        # 오늘기준 과거 1년 + 윤년이 포함되지 않은경우 = 366
        1년은 365일이지만 오늘 날짜를 포함하여 366일,
        각요일은 52개의 요일을가지고 년을 시작하는 요일과 이전요일에 + 1
        ex) 2022-07-01(금) ~ 2023-07-01(토) = 금:53 토: 53

        # 오늘기준 과거 1년 - 윤년이 포함된경우 = 367
        1년은 366일이지만 오늘 날짜를 포함하여 367일
        각 요일은 52개의 요일을가지고 년을 시작하는 요일과 이전 요일까지 + 1
        ex) 2023-07-02(일) ~ 2024-07-02(화) = 일:53 월:53 화: 53 
    
    */
   const resultWrap = Object.keys(result).map( day => ({[day]:[...result[day]]}));
   const dayIndex = resultWrap.findIndex((day) => day[Object.keys(day)[0]].length === 53);
   for(let i = 0 ; i < dayIndex ; i++) resultWrap[i][daysOfWeek[i]].unshift(null);
    return resultWrap;
};