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

    /*
        일 월 화 수 목 금 토 일 
        
        1년기준: 365
        1년기준 윤년 포함: 366

        오늘기준 과거1년 : 366
        오늘기준 과거1년 윤년포함: 367

        각각의 기준을 만드는게 좋을듯 

        1년이면서 윤년이 없다면 53길이를 찾아, 53이전까지의 요일에 null을 할당
        1년이면서 윤년이 있다면, 

        간단하게 생각해서 일요일이 53개라면 다음 53개인 요일을찾아 그전까지 null을 할당하고,
        53개인 요일이 없다면 할당하지 않고 그대로 진행
    */

    // console.log(result);
    
    // 정리된 요일을 하나의 객체로 만들어 배열에 할당
    const resultWrap = Object.keys( result ).map( day => ( {[day]:[...result[day]]} ));
    // console.log("resultWrap:",resultWrap)
    // 정리된 요일객체들을 처음으로 배열의 길이가 53인 요소의 index위치 파악
    // const dayIndex = resultWrap.findIndex( day  => day[Object.keys( day )[0]].length === 53 );
    // const firstWeek = resultWrap.some( day => day[Object.keys(day)].length === 53);
    // console.log(firstWeek)
    let pushWeekIndex;




    for ( let i = 0 ; i < resultWrap.length ; i ++) {
        
        if ( i === 0 && resultWrap[i]["일"].length ) {
            pushWeekIndex = i;
        }

        if ( i !== 0 && resultWrap[i][Object.keys(resultWrap[i])].length === 53 ) {
            pushWeekIndex = i;
            break;
        }
    }
    // index위치 이전까지의 요소들에 null을 할당
    // 길이가 52인 요소들에 null을 할당하여 세로의 기준을 맞춤
    for ( let i = 0 ; i < pushWeekIndex ; i++ ) resultWrap[i][daysOfWeek[i]].unshift(null);
    return resultWrap;
};