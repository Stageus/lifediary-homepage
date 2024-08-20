import { useState } from "react";
import { S } from "./style";
// import defaultProfile from "@shared/assets/imges/profile.png";

/*

    1. 댓글의 경우에수
      - 본인댓글이냐: isMine(true) -> 수정, 삭제
      - 본인댓글이면서 작성자냐: diaryIsMine & IsMine(true) -> 수정, 삭제, 답변
      - 본인 일기이고, 다른사람의 댓글에 답변이 달려있다면: diaryIsMine & isMine(false) & reComment(not null) -> 답변
      - 본인 일기이고, 다른사람의 댓글에 답변이 달려있지 않다면: diaryIsMine & isMine(false) & reComment(null) - > 답변숨기기
    
    2. 답글의 경우에수
      -  작성자라면 diaryIsMine(true): 수정, 삭제 보이기


      수정을 누르면 input창이 나오는건 문제가 안되는데
      답글을 눌렀을시 하나의 input창이 활성화 되며,
      현재 유저에 대한 정보를 기반으로 답글 작성된게 눈에 보여야하는데
      
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

  const [ changeText, setChangeText ] = useState( null );

  const onClickSet = () => {
    setChangeText(textContent);
  };

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
                    <span onClick={onClickSet}>수정</span>
                    <span>삭제</span>
                  </>
                )}
           
              {/* - 본인 일기이고, 다른사람의 댓글에 답변이 달려있지 않다면: diaryIsMine & isMine(false) & reComment(null) - > 답변숨기기 */}
              {diaryIsMine && isMine && reComment && <div>답글</div>}
            </S.UserEditor>
          </S.UserInfoWrap>
          { changeText ? <input value={changeText} onChange={ (e) => setChangeText(e.target.value)}/> : <p>{ textContent }</p>}
        </S.ContentWrap>
      </S.ItemInfo>
    </>
  );
};
