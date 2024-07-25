// Slice
import { S } from "./style"; 
import { Slider } from "./slider/ui";
import { Comment } from "./comment/ui";
import { useModel } from "../model/useModel";
// Layer
import { DiaryLikeBtn } from "@features/diaryLikeBtn";
import { ComplainModal } from "@features/complainModal";
import { DefaultBtn } from "@shared/ui";
import { Icon } from "@shared/ui";

export const DiaryInfo = ( props )=>{
    const { idx, imgContents, textContent, isLiked, likeCnt, commentCnt } = props.diary;
    const { isOpenModal, onClickModal, clipBoard } = useModel();
    console.log("공유버튼");
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