export const mapper = ( mapperData ) => {

    const subscribeList = mapperData.map(( data) => (
        {
			toAccountIdx : data.toAccountIdx,
			profileImg : data.profileImg,
			nickname : data.nickname
		}
    ));

    return subscribeList;
}