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
    
    for(let i = 0 ; i < daysOfWeek.length - 1 ; i++){
        if(result[daysOfWeek[i]].length >= result[daysOfWeek[i + 1]].length) break;
        result[daysOfWeek[i]].unshift(null);
    }
    
    const resultWrap = Object.keys(result).map( day => ({[day]:result[day]}));
    return resultWrap;
};