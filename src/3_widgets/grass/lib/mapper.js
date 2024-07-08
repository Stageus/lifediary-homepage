export const mapper = (mapperData)=>{

    const dataWrap = mapperData.map((data) => ({
        idx: data.idx,
        color: data.color,
        date: data.date
    }))

    return dataWrap;
}