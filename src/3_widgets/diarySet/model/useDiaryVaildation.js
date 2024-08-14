import { tagValidation, imgValidation, diaryContentValidation } from "@shared/consts/validation";
import { useMessage } from "@shared/store";

export const useDiaryVaildation = ( submit ) => {
    
    const setMessage = useMessage( state => state.setMessage );

    const checkSubmit = ( props ) => {
        const { textContent, tags, imgContents } = props;
        
        // 일기내용 유효성 검사
        if ( !diaryContentValidation(textContent) ) {
            setMessage(`일기내용은 최대 500자 입니다.`)
            return;
        }

        // 태그 유효성 검사
        if ( Array.isArray(tags) && !tags.length) {
            const isTrue = tags.some( tag => !tagValidation(tag));
            if ( isTrue ) return setMessage("#은 사용할수 없습니다. \n\n태그는 최대 20자입니다.");             
        }

        // 이미지 개수 && 이미지 크기 && 이미지 확장자
        if ( Array.isArray(imgContents) ) {
            if ( imgContents.length > 3 ) return setMessage("이미지는 3개이상 등록할수 없습니다.");

            const isTrue = imgContents.some( img => !imgValidation(img));
            if ( isTrue ) return setMessage("이미지확장자: JPG, JPEG, GIF, PNG\n이미지크기: 10M 이하");             
        }   
        return submit(props);
    }

    return [ checkSubmit ];

}