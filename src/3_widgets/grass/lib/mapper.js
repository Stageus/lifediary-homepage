export const mapper = (mapperData)=>{

    const grassList = mapperData.map((data) => ({
        idx: data.idx,
        color: data.color,
        date: data.date
    }))

    return grassList;
}