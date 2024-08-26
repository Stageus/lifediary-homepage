// Npm
import { useRef } from "react";
// Slcie
import { S } from "./style";
import { useValidation } from "../model/useValidation";
import { usePostComment } from "../api/usePostComment";
// Layer
import { DefaultBtn } from "@shared/ui";

export const CommentInput = ( props ) => {

    const { diaryIdx, changeComment } = props;
    const { isValidation, validation } = useValidation();
    const commentTextRef = useRef( null );
    const [ onClickCommentSubmit ] = usePostComment( changeComment, commentTextRef);


    return(
        // 디자인 잠시대기
        <S.InputArea $isValidation={isValidation}>
          <input 
          ref={commentTextRef}
          onChange={ validation }
          placeholder="댓글을 달아주세요"/>
          <div>
            <DefaultBtn 
            type= { isValidation ? "select" : "disabled"}
            text="작성" 
            size="medium"
            onClick={ () => onClickCommentSubmit( diaryIdx, commentTextRef.current?.value )}
             />
          </div>
        </S.InputArea>
    );
    
}