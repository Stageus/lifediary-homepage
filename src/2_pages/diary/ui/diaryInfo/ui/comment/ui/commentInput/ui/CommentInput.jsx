// Slcie
import { S } from "./style";
import { useValidation } from "../model/useValidation";
import { usePostComment } from "../api/usePostComment";
// Layer
import { DefaultBtn } from "@shared/ui";

export const CommentInput = ( props ) => {

    const { diaryIdx } = props;
    const { complainTextRef, isValidation, validation } = useValidation();
    const [ onClickSubmit ] = usePostComment();


    return(
        // 디자인 잠시대기
        <S.InputArea $isValidation={isValidation}>
          <input 
          ref={complainTextRef}
          onChange={ validation }
          placeholder="댓글을 달아주세요"/>
          <div>
            <DefaultBtn 
            type= { isValidation ? "select" : "disabled"}
            text="작성" 
            size="medium"
            onClick={ () => onClickSubmit(diaryIdx, complainTextRef.current.value)}
             />
          </div>
        </S.InputArea>
    );
    
}