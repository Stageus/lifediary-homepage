import { useState } from "react";
import { S } from "./style"; 
import { SubscribeBtn } from "@features/subscribeBtn";
import { Slider } from "./slider/ui";
import { DefaultBtn } from "@shared/ui";
import { Icon } from "@shared/ui";

export const DiaryInfo = (props)=>{
    const {idx, profileImg, nickname, createdAt, isSubscribed, imgContents, textContent, isLiked, likeCnt, commentCnt} = props.diary;
    const [openModal, setOpenModal] = useState(false);
    const onClickModal = () => setOpenModal(!openModal);
    
    return (
        <S.DiaryWrap>
          <S.DiaryHeader>
            <S.DiaryHeaderContainer>
              <S.UserImg>
                <img src={profileImg} alt="#" />
              </S.UserImg>

              <S.UserName>
                <span>{nickname}</span>
              </S.UserName>

              <S.DiaryCt>
                <span>{createdAt}</span>
              </S.DiaryCt>

              <S.DiarySubscribe>
                <SubscribeBtn isSubscribed={isSubscribed} accountIdx={idx} />
              </S.DiarySubscribe>
            </S.DiaryHeaderContainer>
            <S.DiaryEditor>
              <div>
                <DefaultBtn text="일기수정" />
              </div>
              <div>
                <DefaultBtn text="일기삭제" />
              </div>
            </S.DiaryEditor>
          </S.DiaryHeader>

          <S.DiaryMain>
            <S.DiaryMainWrap>
              <S.DiaryContainer>
                <S.DiaryInfo>
                  <S.DiaryImgContainer>
                    <Slider sliderList={imgContents} />
                  </S.DiaryImgContainer>
                  <S.DiaryContent>
                    {textContent}
                  </S.DiaryContent>
                </S.DiaryInfo>

                <S.DiaryComment $openModal={openModal}>
                  <S.Cancel onClick={onClickModal}>
                    <Icon size="30px" type="cancel" color="#FF6767" />
                  </S.Cancel>
                </S.DiaryComment>
              </S.DiaryContainer>

              <S.DiarySideList>
                <DefaultBtn text="좋아요" />
                <DefaultBtn text="댓글" onClick={onClickModal} />
                <DefaultBtn text="공유" />
                <DefaultBtn text="신고" />
              </S.DiarySideList>
            </S.DiaryMainWrap>
          </S.DiaryMain>
        </S.DiaryWrap>
      );
}