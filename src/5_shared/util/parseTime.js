export const parseTime = (timeStamp)=>{
    
    const propsDate = new Date(timeStamp);
    const year = propsDate.getFullYear();
    const month = (propsDate.getMonth() + 1).toString().padStart(2, "0");
    const day = propsDate.getDate().toString().padStart(2, "0");

    return timeStamp ? `${year}-${month}-${day}` : null;   
}