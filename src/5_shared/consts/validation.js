
export const tagValidation = ( tag ) => {
    const regex = /^[^\s#]{1,20}$/;
    if( !regex.test(tag) ) return false;
    return true;
};

export const imgValidation = ( fileObj ) => {
    // 파일 타입체크 : jpg 와 jpeg는 동일한 확장자는 아니지만 MIME타입이 동일한 타입으로 간주되기도 한다

    const imgTypeCheckr = ["image/jpeg","image/jpg","image/png","image/gif"].some( type => type === fileObj.type );
    const imgMaxSize = fileObj.size < 10 * 1024 * 1024;
    return imgTypeCheckr && imgMaxSize;
};

export const nameValidation = ( name ) => {
    const regex= /^.{3,20}$/;
    if ( !regex.test(name) ) return false;
    return true;
};

export const diaryContentValidation = ( text ) => {
    const regex= /^.{0,500}$/;
    if ( !regex.test(text) ) return false;
    return true;
}