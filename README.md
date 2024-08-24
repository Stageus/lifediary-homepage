# 진행상황
### clamp

[app]
### header
- ui/search: 검색을 눌렀을시, 태그로 등록되지 않은 문자열삭제 필요
- 레이아웃 css 다시적용 필요

### aisde
- 각버튼의 url위치 다시판단해야함
- width가 고정적이지 않아 움직임
- height 또한 짧아짐 현상

### layout
- 특정컴포넌트가 보일때, 일치하는 url판단을 다시해줘야함
- signup, loging, messageModal 사용하기 위치 이동으로인해, header 및 asied 숨겨야함

---
# [pages]
### login ✅
- ui: 완료
- api: 완료
- model: 없음

### signup ✅
- ui: 완료
- api: 완료
- model: 완료

### search ✅
- ui: 완료
  - 다른페이지 이동시에 header에 남은 태그들 제거해야하나?
  - 유저프로필 클릭하면 유저페이지로
  - 일기이미지 or 일기내용 클릭하면 메인페이지로 리다이렉트
- api: 완료
- model: 없음

### diaryCreate ✅
- ui: 완료
  - button은 맨밑으로 위치할까?
  - 업로드버튼 클릭시에 오늘 날짜기준 일기를 작성했는지 판별하여 막을것인지?
  - 휑한데 제목추가해야하나?
- api: 완료
  - 200 상태코드일때 홈이아닌, 메인페이지로 리다이렉트 시켜줄것
- model: 없음

### diaryUpdate ✅
- ui: 완료
  - 휑한데 제목추가해야하나?
  - button은 맨밑으로 위치할까?
- api: 완료
  - 200 상태코드일때 홈이아닌, 메인페이지로 리다이렉트 시켜줄것
- model:없음


---
# [widgets]
### diarySet ✅
- ui: 완료
- api: 없음
- model: 완료
  - create & update를 동시에 사용하고있어서 코드가 읽기가 힘든부분이 존재함, 동작에 문제가 있지 않지만 api부분또한 랩핑해야하는 현상이 있음
  - 
- ### profileSet ✅
- ui: 
- api:
- model:


comment 컴포넌트에서 너무많은 처리가 이루어지고 있음
문제는 되지않지만, 가독성이 너무 많이 떨어짐,
댓글,답글을 같은 공간에 둔이유는 ?

1. 댓글,답글의 똑같은 ui로 인해 중복 css를 줄이기 위함
2. 댓글수정, 답글수정 api가 똑같음
3. 댓글삭제, 답글삭제 api가 똑같음
4. 댓글에서 답글버튼 클릭시 UX적으로 바로밑에서 작성하는것으로 판단하기 위함
5. 답글의 ui에서 바로 답글 api를 요청해야함
6. 댓글수정, 답글수정시에 해당 컴포넌트만 렌더링 시키기 위함
7. 댓글에 답글여부에따라 버튼을 보여주기 위함 
   즉 디자인,api,렌더링 으로 인해 코드의 양이 증가함






   {/* 댓글영역 */}
      {isDeleteComment ? null : (
        <S.comment>
        {/* 작성자 답글이라면 화살표 표시*/}
        {isParent ? null : (
          <svg
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="black"
          >
            <path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z" />
          </svg>
        )}
        {/* 댓글 이미지 영역 */}
        <S.imgArea>
          <Profile img={profileImg} />
        </S.imgArea>

        <S.contentsArea>
          {/* 댓글 유저이름, 댓글 작성시간*/}
          <S.contentsInfo>
            <span>{nickname}</span>
            <span>{parseTime(createdAt)}</span>
            <S.editorBtnListWrap>
              {/* 댓글수정, 댓글삭제 */}
              {/* 댓글이 내꺼라면 수정버튼 삭제 버튼을 보여준다 */}
              {isMine ? (
                <>
                  {!isOpenCommentInput && (
                    <span onClick={onClickOpenComment}>수정</span>
                  )}
                  <span onClick={() => deleteComment(idx, true)}>삭제</span>
                </>
              ) : null}
              {/* 답글작성*/}
              {/* 답글이면서 && 답글없으면 && 내일기인지 */}
              { isParent && !isReplied && diaryIsMine ? (
                <>
                  {iOpensReplyInput ? null : (
                    <span onClick={onClickOpenReply}>답글작성</span>
                  )}
                </>
              ) : null}
              {/* 답글수정 */}
              {/* 댓글이면서 && 답글이있으면*/}
              { !isParent && isReplied ? (
                <span onClick={onClickOpenReply}>답글수정</span>
              ) : null}
            </S.editorBtnListWrap>
          </S.contentsInfo>

          {/* 댓글내용 및 댓글작성 영역*/}
          <S.contents>
            {isOpenCommentInput ? (
              <S.inputArea>
                <S.inputWrap>
                  <S.lineInput defaultValue={commentText} ref={commentRef} />
                </S.inputWrap>
                <S.editorBtnArea>
                  <span onClick={()=>putComment( idx, commentRef.current.value)}>확인</span>
                  <span onClick={onClickOpenComment}>취소</span>
                </S.editorBtnArea>
              </S.inputArea>
            ) : (
              commentText
            )}
          </S.contents>
        </S.contentsArea>
      </S.comment>
      ) }


      {/* 댓글을 삭제했을경우 */}
      {isDeleteComment ? null : (
        <S.comment>
          {/* 작성자 답글이라면 화살표 표시*/}
          {isParent ? null : (
            <svg
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="black"
            >
              <path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z" />
            </svg>
          )}
          {/* 댓글 이미지 영역 */}
          <S.imgArea>
            <Profile img={profileImg} />
          </S.imgArea>

          <S.contentsArea>
            {/* 댓글 유저이름, 댓글 작성시간*/}
            <S.contentsInfo>
              <span>{nickname}</span>
              <span>{parseTime(createdAt)}</span>
              <S.editorBtnListWrap>
                {/* 댓글수정, 댓글삭제 */}
                {/* 댓글이 내꺼라면 수정버튼 삭제 버튼을 보여준다 */}
                {isMine ? (
                  <>
                    {!isOpenCommentInput && (
                      <span onClick={onClickOpenComment}>수정</span>
                    )}
                    <span onClick={() => deleteComment(idx, true)}>삭제</span>
                  </>
                ) : null}
                {/* 답글작성*/}
                {/* 답글이면서 && 답글없으면 && 내일기인지 */}
                { isParent && !isReplied && diaryIsMine ? (
                  <>
                    {iOpensReplyInput ? null : (
                      <span onClick={onClickOpenReply}>답글작성</span>
                    )}
                  </>
                ) : null}
                {/* 답글수정 */}
                {/* 댓글이면서 && 답글이있으면*/}
                { !isParent && isReplied ? (
                  <span onClick={onClickOpenReply}>답글수정</span>
                ) : null}
              </S.editorBtnListWrap>
            </S.contentsInfo>

            {/* 댓글내용 및 댓글작성 영역*/}
            <S.contents>
              {isOpenCommentInput ? (
                <S.inputArea>
                  <S.inputWrap>
                    <S.lineInput defaultValue={commentText} ref={commentRef} />
                  </S.inputWrap>
                  <S.editorBtnArea>
                    <span onClick={()=>putComment( idx, commentRef.current.value)}>확인</span>
                    <span onClick={onClickOpenComment}>취소</span>
                  </S.editorBtnArea>
                </S.inputArea>
              ) : (
                commentText
              )}
            </S.contents>
          </S.contentsArea>
        </S.comment>
      )}

      {/* 답글작성 영역 */}
      {iOpensReplyInput ? (
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
            <S.lineInput 
            defaultValue={rePlyText}
            ref={rePlyRef} />
          </S.inputWrap>
          <S.editorBtnArea>
            <span onClick={()=>postReply(idx, rePlyRef.current.value)}>확인</span>
            <span onClick={onClickOpenReply}>취소</span>
          </S.editorBtnArea>
        </S.inputArea>
      ) : null}






      {/* 답글이 작성되었을 경우 영역 _____________________________ */}
              {/* 삭제요청하지 않았고, 작성되어있는 댓글이 있다면 */}
              {!isDeleteReply && replyObj && (
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
                    <Profile img={replyObj.profileImg} />
                  </S.imgArea>

                  <S.contentsArea>
                    {/* 작성된 작성자 이름, 답글 작성시간*/}
                    <S.contentsInfo>
                      <span>{replyObj.nickname}</span>
                      <span>{parseTime(replyObj.createdAt)}</span>
                      <S.editorBtnListWrap>
                        {/* 답글수정 버튼이 눌리지 않았다면 */}
                        {!iOpensReplyInput && (
                          <span onClick={onClickOpenReply}>답글수정</span>
                        )}
                        {/* 항시노출 */}
                        <span
                          onClick={() => deleteComment(replyObj.idx, false)}
                        >
                          삭제
                        </span>
                      </S.editorBtnListWrap>
                    </S.contentsInfo>
                    {/* 작성된 답글내용 및 수정 영역*/}
                    <S.contents>
                      {/* 작성된 답글 수정영역 */}
                      {iOpensReplyInput ? (
                        <S.inputArea>
                          <S.inputWrap>
                            <S.lineInput
                              defaultValue={replyObj.textContent}
                              ref={replyRef}
                            />
                          </S.inputWrap>
                          <S.editorBtnArea>
                            <span
                              onClick={() =>
                                putComment(replyObj.idx, replyRef.current.value, false)
                              }
                            >
                              확인
                            </span>
                            <span onClick={onClickOpenReply}>취소</span>
                          </S.editorBtnArea>
                        </S.inputArea>
                      ) : (
                        inputText
                      )}
                    </S.contents>
                  </S.contentsArea>
                </S.comment>
              )}
