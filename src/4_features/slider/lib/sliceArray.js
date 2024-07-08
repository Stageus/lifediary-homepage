export const sliceArray = (array,divide)=>{
    const result = [];
    for(let i = 0 ; i < array.length ; i += divide){
        const sliceArray = array.slice(i, i + divide)
        result.push(sliceArray)
    }
    return result;
}