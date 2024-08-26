// Slice
import { S } from "./style";
import { Slider } from "./slider/ui";
import { CommentList } from "./commentList";
import { useOpenModal } from "../model/useOpenModal";
import { useClipBoard } from "../model/useClipBoard";
import { DiaryLikeBtn } from "./diaryLikeBtn";
import { ComplainModal } from "./complainModal";
// Layer
import { DefaultBtn } from "@shared/ui";
import { Icon } from "@shared/ui";

export const DiaryInfo = (props) => {
  const {
    idx,
    imgContents,
    textContent,
    isLiked,
    likeCnt,
    commentCnt,
    isMine,
  } = props.diary;
  const { isOpenModal, onClickModal } = useOpenModal();
  const { clipBoard } = useClipBoard();

  return (
    <S.DiaryInfo>
      {/* 슬라이더(일기이미지), 일기내용 */}
      <S.ContentPart>
        <S.DiarySliderContainer>
          {/* 슬라이더(일기이미지) */}
          <Slider sliderList={imgContents} />
        </S.DiarySliderContainer>

        {/* 일기내용 */}
        <S.DiaryContent>{textContent}</S.DiaryContent>
      </S.ContentPart>

      {/* 댓글모달 */}
      <S.CommentPart $openModal={isOpenModal}>
        <S.Cancel onClick={onClickModal}>
          <Icon size="30px" type="cancel" color="#FF6767" />
        </S.Cancel>
        {/* 댓글리스트 및 내용 */}
        {isOpenModal ? (
          <CommentList
            diaryIsMine={isMine}
            commentCnt={commentCnt}
            diaryIdx={idx}
          />
        ) : null}
      </S.CommentPart>

      {/* 좋아요, 댓글버튼, 공유버튼, 신고버튼 */}
      <S.ButtonPart>
        <DiaryLikeBtn diaryIdx={idx} likeCnt={likeCnt} isLiked={isLiked} />

        <S.CommentBtn $isOpen={isOpenModal} onClick={onClickModal}>
          <div>
            <Icon type="comment" color={isOpenModal ? "#F1F1F1" : "#FF6767"} />
          </div>
          <div>{`${commentCnt}개`}</div>
        </S.CommentBtn>

        <S.SimpleBtnWrap>
          <DefaultBtn text="공유" onClick={() => clipBoard(`diary/${idx}`)} />
        </S.SimpleBtnWrap>

        {!isMine && (
          <S.SimpleBtnWrap>
            <ComplainModal diaryidx={idx} />
          </S.SimpleBtnWrap>
        )}
      </S.ButtonPart>
    </S.DiaryInfo>
  );
};
