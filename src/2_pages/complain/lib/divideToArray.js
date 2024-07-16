export const divideToArray = (number, divide) => {
    const result = Math.ceil(number/divide);
    return Array(result).fill().map((_, idx)=> idx + 1);
}