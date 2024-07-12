import { useState } from "react";
import { S } from "./style"; 
import { Slider } from "./slider/ui";
import { DefaultBtn } from "@shared/ui";
import { Icon } from "@shared/ui";

export const DiaryInfo = (props)=>{
    const {idx, imgContents, textContent, isLiked, likeCnt, commentCnt} = props.diary;
    const [openModal, setOpenModal] = useState(false);
    const onClickModal = () => setOpenModal(!openModal);
    
    return (
        <S.DiaryInfo>

                <S.ContentPart>
                  <S.DiarySliderContainer>
                    <Slider sliderList={imgContents} />
                  </S.DiarySliderContainer>

                  <S.DiaryContent>
                    {textContent}
                  </S.DiaryContent>
                </S.ContentPart>

                <S.CommentPart $openModal={openModal}>
                  <S.Cancel onClick={onClickModal}>
                    <Icon size="30px" type="cancel" color="#FF6767" />
                  </S.Cancel>
                </S.CommentPart>
                
                <S.ButtonPart>
                    <DefaultBtn text="좋아요" />
                    <DefaultBtn text="댓글" onClick={onClickModal} />
                    <DefaultBtn text="공유" />
                    <DefaultBtn text="신고" />
                </S.ButtonPart>

        </S.DiaryInfo>
      );
}