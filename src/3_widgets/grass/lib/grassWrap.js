// 365 ~ N 개의 리스트를 받아 각요일별로 정리하는 함수
export const grassWrap = ( grassList )=>{
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

    // 365 ~ N개의 각 요일로 정리
    for ( let grass of grassList ) {

        const grassDay = new Date( grass.date ).getDay();
        const dayName = daysOfWeek[grassDay];
        result[dayName].push( grass );
    };
    
    // 정리된 요일을 하나의 객체로 만들어 배열에 할당
    const resultWrap = Object.keys( result ).map( day => ( {[day]:[...result[day]]} ));
    // 정리된 요일객체들을 처음으로 배열의 길이가 53인 요소의 index위치 파악
    const dayIndex = resultWrap.findIndex( day  => day[Object.keys( day )[0]].length === 53 );
    // index위치 이전까지의 요소들에 null을 할당
    // 길이가 52인 요소들에 null을 할당하여 세로의 기준을 맞춤
    for ( let i = 0 ; i < dayIndex ; i++ ) resultWrap[i][daysOfWeek[i]].unshift(null);
    
    return resultWrap;
};