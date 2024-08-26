import { useState } from "react";
// Slice
import { S } from "./style";
import { Comment } from "./comment";
import { CommentInput } from "./commentInput";
import { useGetCommentList } from "../api/useGetCommentList";
// Layer
import { useScroll } from "@shared/hook";

export const CommentList = (props) => {

  const { diaryIsMine, diaryIdx, commentCnt } = props;
  const [ getCommentList, commentList, isLoading ] = useGetCommentList(diaryIdx);
  const [ newCommentList, setNewCommentList ] = useState([]);
  const changeComment = (value) => setNewCommentList(value);
  const [ watchRef ] = useScroll( getCommentList );
  
  return (
    <>
      <S.commentList>
        {/* 댓글개수 */}
        <S.titleArea>{`댓글 ${commentCnt}개`}</S.titleArea>

        {/* 새로운 댓글을 작성했을경우 요청하지 않고추가 */}
        {newCommentList.length !== 0 &&
          newCommentList?.map((comment, idx) => {
            return <Comment key={idx} comment={comment} diaryIsMine={diaryIsMine} />;
          })}
        {/* 요청한 댓글리스트 */}
        <S.commentListArea>
          {commentList ? (
            commentList?.map((comment, idx) => {
              return (
                  <Comment
                    key={idx}
                    comment={comment}
                    diaryIsMine={diaryIsMine}
                  />
              );
            })
          ) : (
            <S.message>작성된 댓글이 없습니다...</S.message>
          )}

          { !isLoading && <div ref={watchRef}/>}
          { isLoading && <div>로딩중...</div>}
        </S.commentListArea>

        {/* 댓글 입력 */}
        <CommentInput diaryIdx={diaryIdx} changeComment={changeComment} />
      </S.commentList>
    </>
  );
};