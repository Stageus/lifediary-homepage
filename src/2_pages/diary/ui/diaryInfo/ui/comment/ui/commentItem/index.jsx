import { S } from "./style";
import defaultProfile from "@shared/assets/imges/profile.png";

/*

    1. 댓글의 경우에수
      - 본인댓글이냐: isMine(true) -> 수정, 삭제
      - 본인댓글이면서 작성자냐: diaryIsMine & IsMine(true) -> 수정, 삭제, 답변
      - 본인 일기이고, 다른사람의 댓글에 답변이 달려있다면: diaryIsMine & isMine(false) & reComment(not null) -> 답변
      - 본인 일기이고, 다른사람의 댓글에 답변이 달려있지 않다면: diaryIsMine & isMine(false) & reComment(null) - > 답변숨기기
    
    2. 답글의 경우에수
      -  작성자라면 diaryIsMine(true): 수정, 삭제 보이기
      
*/

export const CommentItem = ( {comment, diaryIsMine} ) => {
  const {
    profileImg,
    nickname,
    createAt,
    textContent,
    isMine,
    isParent,
    reComment,
  } = comment;


  return (
    <>
      <S.ItemInfo>
        <S.ImgWrap>
          <img src={ profileImg ?? defaultProfile } alt="프로필 이미지" />
        </S.ImgWrap>
        <S.ContentWrap>
          <S.UserInfoWrap>
            <S.UserInfo>
              <span>{ nickname }</span>
              <span>{ createAt }</span>
            </S.UserInfo>
            <S.UserEditor>
              {/* 본인댓글이냐: isMine(true) -> 수정, 삭제 */}
              {isMine && (
                  <>
                    <span>수정</span>
                    <span>삭제</span>
                  </>
                )}
           
              {/* - 본인 일기이고, 다른사람의 댓글에 답변이 달려있지 않다면: diaryIsMine & isMine(false) & reComment(null) - > 답변숨기기 */}
              {diaryIsMine && isMine && reComment && <div>답글</div>}
            </S.UserEditor>
          </S.UserInfoWrap>
          <p>{ textContent }</p>
        </S.ContentWrap>
      </S.ItemInfo>
    </>
  );
};
