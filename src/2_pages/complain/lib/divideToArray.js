// 정수와 나눌숫자를 받아 배열로 반환하는 함수
export const divideToArray = ( number, divide ) => {

    const result = Math.ceil( number/divide );

    return Array( result ).fill().map(( _, idx )=> idx + 1);
}