// 배열과 나눌 숫자를 받아 이차원 배열로만드는 함수
export const sliceDiaryCount = ( array, divide )=>{

    const result = [];

    for ( let i = 0 ; i < array.length ; i += divide ){

        const sliceArray = array.slice( i, i + divide );
        result.push( sliceArray );
    };
    
    return result;
}