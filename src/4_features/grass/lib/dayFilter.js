export const dayFilter = (grassList)=>{
    const days = ["일","월","화","수","목","금","토"];
    const result = [
        {"일":[]},
        {"월":[]},
        {"화":[]},
        {"수":[]},
        {"목":[]},
        {"금":[]},
        {"토":[]},
    ];
    for(let grass of grassList){
        const grassDay = new Date(grass.date).getDay();
        const dayName = days[grassDay];
        for(let obj of result){
            if(obj[dayName]){
                obj[dayName].push(grass);
                break;
            }
        }
    }
    return result;
};