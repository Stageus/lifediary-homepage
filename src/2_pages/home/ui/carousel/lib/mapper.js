// 데이터 mapper
export const mapper = ( mapperData )=>{

    const sliderDiaryList = mapperData.map(( data ) => (
        {
        idx : data.idx,
		thumbnailImg : data.thumbnailImg,
		nickname : data.nickname,
		profileImg : data.profileImg,
        }
    ));

    return sliderDiaryList;
}