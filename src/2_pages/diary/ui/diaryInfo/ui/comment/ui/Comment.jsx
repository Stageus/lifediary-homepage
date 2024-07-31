// Slice
import { S } from "./style";
import { CommentItem } from "./commentItem";
import { CommentInput } from "./commentInput"
import { useGetComment } from "../api/useGetComment";
// Layer
import { useScroll } from "@shared/hook";

export const Comment = ( props ) => {

  const { likeCount, diaryIsMine, diaryIdx } = props;
  const [ getComment, commentList, isLoading, errorMessage ] = useGetComment( diaryIdx );
  const [ rootRef, watchRef ] = useScroll( getComment );
      
  return (
    <>
      <S.Comment>
        <S.TitleArea>{`댓글 ${likeCount}개`}</S.TitleArea>

        <S.ContentArea ref={ rootRef }>
          {commentList &&
            commentList.data?.map((comment, idx) => {
              return (
                  <S.CommentWrap key={ idx }>
                    <CommentItem 
                        comment={comment} 
                        diaryIsMine={diaryIsMine} />
                    {comment.reComment && (
                      <S.ReComment>
                        <div>
                          <svg
                            height="30px"
                            viewBox="0 -960 960 960"
                            width="30px"
                            fill="black"
                          >
                            <path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z" />
                          </svg>
                        </div>
                        <CommentItem 
                            comment={comment.reComment}
                            diaryIsMine={diaryIsMine}
                        />
                      </S.ReComment>
                    )}
                  </S.CommentWrap>
              );
            })}

            { commentList && commentList?.count >= 10 
            && <div ref={ watchRef}></div>}
            <div ref={ watchRef}></div>
            { isLoading ? <div>...로딩중</div> : null}
            { errorMessage && <div>{ errorMessage }</div>}
        </S.ContentArea>

        <CommentInput diaryIdx={diaryIdx}/>
      </S.Comment>
    </>
  );
};
