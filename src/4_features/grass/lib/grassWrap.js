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

    const resultWrap = Object.keys(result).map( day => ({[day]:result[day]}));
    const dayIndex = resultWrap.findIndex((day) => day[Object.keys(day)[0]].length === 53);
    for(let i = 0 ; i < dayIndex ; i++) result[daysOfWeek[i]].unshift(null);
    
    return resultWrap;
};