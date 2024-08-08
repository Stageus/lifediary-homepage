
export const tagValidation = ( tag ) => {
    const regex = /^[^\s#]{1,20}$/;
    if( !regex.test(tag) ) return false;
    return true;
};