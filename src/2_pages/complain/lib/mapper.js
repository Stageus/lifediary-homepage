export const mapper = (mapperData)=>{
    
    const complainList = mapperData.result.map( data => (
        {
            idx: data.idx,
            textContent: data.textContent,
            nickname: data.nickname,
            createdAt: data.createdAt,
            isInvalid: data.isInvalid,
            diaryIdx: data.diaryIdx,
            processedAt: data.processedAt
        }
    ))

    return {result: [...complainList], reportCnt: mapperData.reportCnt}
}