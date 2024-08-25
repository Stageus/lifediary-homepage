
export const tagValidation = ( tag ) => {
    const regex = /^[^\s#]{1,20}$/;
    return regex.test(tag);
};

export const dateValidation = ( date ) => {
    // 정수인지도 확인해야함
    const regex = /^\d{4}-\d{2}-\d{2}$/;    
    return regex.test(date)
};

export const imgValidation = ( fileObj ) => {
    // console.log(!fileObj);
    if ( !fileObj ) return;
    // 파일 타입체크 : jpg 와 jpeg는 동일한 확장자는 아니지만 MIME타입이 동일한 타입으로 간주되기도 한다

    const imgTypeCheckr = ["image/jpeg","image/jpg","image/png","image/gif"].some( type => type === fileObj.type );
    const imgMaxSize = fileObj.size < 10 * 1024 * 1024;
    return imgTypeCheckr && imgMaxSize;
};

export const nameValidation = ( name ) => {
    const regex= /^.{3,20}$/;
    return regex.test(name)
};

export const diaryContentValidation = ( text ) => {
    const regex= /^.{0,500}$/;
    return regex.test(text)
};

export const complainContentValidation = ( text ) => {
    const regex = /^.{5,300}$/;
    return regex.test(text)
}

export const commentValidation = ( text ) => {
    const regex = /^.{5,300}$/;
    return regex.test(text)
}