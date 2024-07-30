// Slice
import { S } from "./style"; 
import { Slider } from "./slider/ui";
import { Comment } from "./comment/ui";
import { useOpenModal } from "../model/useOpenModal";
import { useClipBoard } from "../model/useClipBoard";
import { DiaryLikeBtn } from "./diaryLikeBtn";
import { ComplainModal } from "./complainModal";
// Layer
import { DefaultBtn } from "@shared/ui";
import { Icon } from "@shared/ui";

export const DiaryInfo = ( props )=>{

    const { idx, imgContents, textContent, isLiked, likeCnt, commentCnt } = props.diary;
    const { isOpenModal, onClickModal } = useOpenModal();
    const { clipBoard } = useClipBoard();
    
    return (
        <S.DiaryInfo>

                <S.ContentPart>
                  <S.DiarySliderContainer>
                    <Slider sliderList={ imgContents } />
                  </S.DiarySliderContainer>

                  <S.DiaryContent>
                    { textContent }
                  </S.DiaryContent>
                </S.ContentPart>

                <S.CommentPart $openModal={ isOpenModal }>
                  <S.Cancel onClick={ onClickModal }>
                    <Icon size="30px" type="cancel" color="#FF6767" />
                  </S.Cancel>
                  <Comment/>
                </S.CommentPart>
                
                <S.ButtonPart>
                    <DiaryLikeBtn
                    diaryIdx={ idx }
                    likeCnt={ likeCnt }
                    isLiked={ isLiked }
                    />

                    <S.CommentBtn
                    $isOpen={ isOpenModal }
                    onClick={ onClickModal }
                    >
                      <div>
                        <Icon
                        type="comment"
                        color={ isOpenModal ? "#F1F1F1" : "#FF6767" }
                        />
                      </div>
                      <div>
                        {`${commentCnt}개`}
                      </div>
                    </S.CommentBtn>

                    <S.SimpleBtnWrap>
                      <DefaultBtn 
                      text="공유"
                      onClick={ () => clipBoard(`diary/${idx}`) }
                       />
                    </S.SimpleBtnWrap>
                    
                    <S.SimpleBtnWrap>
                      <ComplainModal
                      diaryidx= { idx }
                      />
                    </S.SimpleBtnWrap>
                    
                </S.ButtonPart>

        </S.DiaryInfo>
      );
}