export const findFirstDay = (TimeStemp)=>{
    const dayFilter = new Date(TimeStemp);
    const month = dayFilter.getMonth() + 1;
    const day = dayFilter.getDate();

    if(day !== 1){
        return null;
        }
    return `${month}월`;
}