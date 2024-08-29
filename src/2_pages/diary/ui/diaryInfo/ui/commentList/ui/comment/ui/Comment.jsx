// Slice
import { S } from "./style";
import { useIsOpen } from "../model/useIsOpen";
import { useDeleteCommentOrReply } from "../api/useDeleteCommentOrReply";
import { usePutCommnetOrReply } from "../api/usePutCommnetOrReply";
import { usePostReply } from "../api/usePostReply";
// Layer
import { Profile, DefaultBtn } from "@shared/ui";
import { parseTime } from "@shared/util";
import { useCookie } from "@shared/hook";

/*
    해당 컴포넌트의 한계점
    특정댓글에 답글이 포함되어 오는 구조가 아니기 때문에 발생한다.
    작성자가 자신의 일기에 댓글을 달고, 답글을 달고, 특정유저에 답글을 다는것은 문제가 되지않는다
    
    문제
    1. 댓글이 삭제되었을경우, 답글이 같이 삭제되지 않는점
    2. 유저가 작성한 댓글에 일기작성자가 작성한 답글을 삭제했을경우, 유저의 댓글옆에 답글작성 버튼이 생기지않음
    
    위문제들은 컴포넌트가 분리되어있어 발생하는 문제들로, api에서 반환하는 데이터가 문제가 있다고판단,
    데이터를 맵핑해서 사용하려했지만, 무한스크롤로 인해 댓글에 달린 답글이 짤리는 형태이므로 구현하기가 어려움,
    즉 api 가 변경되지 않는한 좋은방법은?
    댓글이 삭제되었을경우, 댓글, 답글이 삭제되었다는 글씨를 보여줘서 밑에 답글들이 딸려오지 않도록 보여준다.
    특정 댓글에 답글이 삭제되었을경우, 답글을 다시작성하는 버튼이 보이지 않는경우는, 전체적인리스트를 다시 불러와 
    버튼을 보여주는것인데, 그렇기에는 렌더링을 위한 컴포넌트 분리가 의미가 없어진다고 생각함
    컴포넌트를 다시 구조를 잡기에는 기간부족으로 인해 불가,
    
*/

export const Comment = (props) => {
  const {
    idx,
    profileImg,
    nickname,
    createdAt,
    textContent,
    isMine,
    isParent,
    isReplied,
  } = props.comment;
  const diaryIsMine = props.diaryIsMine;
  const {
    isOpenCommentArea,
    isOpensReplyArea,
    onClickOpenCommentInput,
    onClickOpenReplyInput,
    commentTextRef,
    replyTextRef,
  } = useIsOpen();

  // 답글작성시 작성자 프로필이미지를 가져오기
  const { cookieGet } = useCookie();
  const [postReply, deleteNowReply, newReplyInfo] = usePostReply(
    onClickOpenReplyInput
  );
  const [deleteCommentOrReply, isDeleteComment, isDeleteReply] =
    useDeleteCommentOrReply(deleteNowReply);
  const [putCommentOrReply, commentText, replyText] = usePutCommnetOrReply(
    textContent,
    onClickOpenCommentInput,
    onClickOpenReplyInput
  );

  return (
    <>
      {/* 댓글일 경우 영역 _____________________________ */}
      {isParent ? (
        <>
          {!isDeleteComment ? (
            <>
              <S.comment>
                {/* 댓글 이미지 영역 */}
                <S.imgArea>
                  <Profile img={profileImg} />
                </S.imgArea>

                <S.contentsArea>
                  {/* 댓글 유저이름, 댓글 작성시간*/}
                  <S.contentsInfo>
                    <span>{nickname}</span>
                    <span>{parseTime(createdAt)}</span>
                    {/* 수정, 삭제, 답글작성 버튼들 */}
                    <S.editorBtnListWrap>
                      {/* 자신의 댓글이면서, 수정버튼이 안눌렸다면 노출*/}
                      {isMine && !isOpenCommentArea && (
                        <span onClick={onClickOpenCommentInput}>댓글수정</span>
                      )}
                      {/* 자신의 댓글이라면 삭제버튼 항시노출 */}
                      {isMine && (
                        <span onClick={() => deleteCommentOrReply(idx, true)}>
                          댓글삭제
                        </span>
                      )}
                      {/* 내일기이고 && 답글이없고 && 새로작성한 답글이 없다면 && 작성버튼이 안눌렸다면 노출*/}
                      {diaryIsMine &&
                        !isReplied &&
                        !newReplyInfo &&
                        !isOpensReplyArea && (
                          <span onClick={onClickOpenReplyInput}>답글작성</span>
                        )}
                    </S.editorBtnListWrap>
                  </S.contentsInfo>
                  {/* 댓글내용 및 댓글수정 영역*/}
                  <S.contents>
                    {/* 수정버튼이 눌렸다면 */}
                    {isOpenCommentArea ? (
                      <S.inputArea>
                        <S.inputWrap>
                          <S.lineInput
                            defaultValue={textContent}
                            ref={commentTextRef}
                          />
                        </S.inputWrap>
                        <S.editorBtnArea>
                          <DefaultBtn
                            text="확인"
                            onClick={() =>
                              putCommentOrReply(
                                idx,
                                commentTextRef.current.value,
                                true
                              )
                            }
                            type="select"
                            size="medium"
                          />
                          <DefaultBtn
                            text="취소"
                            onClick={onClickOpenCommentInput}
                            size="medium"
                          />
                        </S.editorBtnArea>
                      </S.inputArea>
                    ) : (
                      commentText
                    )}
                  </S.contents>
                </S.contentsArea>
              </S.comment>
            </>
          ) : (
            <p>댓글이 삭제되었습니다.</p>
          )}
          {/* 댓글에 새로운답글을 작성하는 영역 _____________________________ */}
          {!newReplyInfo && isOpensReplyArea && (
            <S.inputArea>
              <S.inputWrap>
                <svg
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="black"
                >
                  <path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z" />
                </svg>
                <S.imgArea>
                  <Profile img={cookieGet("profile")} />
                </S.imgArea>
                <S.lineInput ref={replyTextRef} />
              </S.inputWrap>
              <S.editorBtnArea>
                <DefaultBtn
                  text="확인"
                  onClick={() => postReply(idx, replyTextRef.current.value)}
                  type="select"
                  size="medium"
                />
                <DefaultBtn
                  text="취소"
                  onClick={onClickOpenReplyInput}
                  size="medium"
                />
              </S.editorBtnArea>
            </S.inputArea>
          )}
          {/* 댓글에 새로운 답글이 작성되었을때 영역 _____________________________*/}
          {newReplyInfo && (
            <S.comment>
              <svg
                height="30px"
                viewBox="0 -960 960 960"
                width="30px"
                fill="black"
              >
                <path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z" />
              </svg>
              {/* 작성된 답글 이미지 영역 */}
              <S.imgArea>
                <Profile img={cookieGet("profile")} />
              </S.imgArea>

              <S.contentsArea>
                {/* 작성된 답글 이름, 작성된 답글 작성시간*/}
                <S.contentsInfo>
                  <span>{newReplyInfo.nickname}</span>
                  <span>{parseTime(newReplyInfo.createdAt)}</span>
                  {/* 수정, 삭제, 버튼들 */}
                  <S.editorBtnListWrap>
                    {/* 자신의 답글이면서, 수정버튼이 안눌렸다면 노출*/}
                    {newReplyInfo.isMine && !isOpensReplyArea && (
                      <span onClick={onClickOpenReplyInput}>답글수정</span>
                    )}
                    {/* 자신의 답글이라면 삭제버튼 항시노출 */}
                    {newReplyInfo.isMine && (
                      <span
                        onClick={() =>
                          deleteCommentOrReply(newReplyInfo.idx, false)
                        }
                      >
                        답글삭제
                      </span>
                    )}
                  </S.editorBtnListWrap>
                </S.contentsInfo>
                {/* 댓글내용 및 댓글수정 영역*/}
                <S.contents>
                  {/* 수정버튼이 눌렸다면 */}
                  {isOpensReplyArea ? (
                    <S.inputArea>
                      <S.inputWrap>
                        <S.lineInput
                          defaultValue={newReplyInfo.textContent}
                          ref={replyTextRef}
                        />
                      </S.inputWrap>
                      <S.editorBtnArea>
                        
                        <span
                          onClick={() =>
                            putCommentOrReply(
                              newReplyInfo.idx,
                              replyTextRef.current.value,
                              false
                            )
                          }
                        >
                          확인
                        </span>
                        <span onClick={onClickOpenCommentInput}>취소</span>
                      </S.editorBtnArea>
                    </S.inputArea>
                  ) : (
                    replyText ?? newReplyInfo.textContent
                  )}
                </S.contents>
              </S.contentsArea>
            </S.comment>
          )}
        </>
      ) : (
        <>
          {/* 답글일경우 영역 _____________________________ */}
          {!isDeleteReply ? (
            <>
              <S.comment>
                <svg
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="black"
                >
                  <path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z" />
                </svg>
                {/* 답글 이미지 영역 */}
                <S.imgArea>
                  <Profile img={profileImg} />
                </S.imgArea>

                <S.contentsArea>
                  {/* 답글 유저이름, 댓글 작성시간*/}
                  <S.contentsInfo>
                    <span>{nickname}</span>
                    <span>{parseTime(createdAt)}</span>
                    {/* 수정, 삭제, 답글작성 버튼들 */}
                    <S.editorBtnListWrap>
                      {/* 자신의 댓글이면서, 수정버튼이 안눌렸다면 노출*/}
                      {isMine && !isOpenCommentArea && (
                        <span onClick={onClickOpenCommentInput}>답글수정</span>
                      )}
                      {/* 자신의 댓글이라면 삭제버튼 항시노출 */}
                      {isMine && (
                        <span onClick={() => deleteCommentOrReply(idx, true)}>
                          답글삭제
                        </span>
                      )}
                    </S.editorBtnListWrap>
                  </S.contentsInfo>
                  {/* 댓글내용 및 댓글수정 영역*/}
                  <S.contents>
                    {/* 수정버튼이 눌렸다면 */}
                    {isOpenCommentArea ? (
                      <S.inputArea>
                        <S.inputWrap>
                          <S.lineInput
                            defaultValue={textContent}
                            ref={commentTextRef}
                          />
                        </S.inputWrap>
                        <S.editorBtnArea>

                        <DefaultBtn
                            text="확인"
                            onClick={() =>
                              putCommentOrReply(
                                idx,
                                commentTextRef.current.value,
                                true
                              )
                            }
                            type="select"
                            size="medium"
                          />
                            <DefaultBtn
                            text="취소"
                            onClick={onClickOpenCommentInput}
                            size="medium"
                          />
                        </S.editorBtnArea>
                      </S.inputArea>
                    ) : (
                      commentText
                    )}
                  </S.contents>
                </S.contentsArea>
              </S.comment>
            </>
          ) : (
            <p>답글이 삭제되엇습니다.</p>
          )}
        </>
      )}
    </>
  );
};
