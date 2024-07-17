<<<<<<< HEAD
import { useEffect, useRef, useState } from "react";
import { S } from "./style"; 
import { Slider } from "./slider/ui";
import { Comment } from "./comment/ui";
=======
// Slice
import { S } from "./style"; 
import { Slider } from "./slider/ui";
import { useModel } from "../model/useModel";
// Layer
>>>>>>> 4adcdf97510b0eb7f57e64c2f9fc062a27be4a61
import { DiaryLikeBtn } from "@features/diaryLikeBtn";
import { ComplainModal } from "@features/complainModal";
import { DefaultBtn } from "@shared/ui";
import { Icon } from "@shared/ui";

<<<<<<< HEAD
export const DiaryInfo = (props)=>{
    const {idx, imgContents, textContent, isLiked, likeCnt, commentCnt} = props.diary;
    const [openModal, setOpenModal] = useState(false);

    const onClickModal = () => setOpenModal(!openModal);

  //   const commentPartRef = useRef(null);
  //   useEffect(() => {
  //     const handleResize = (entries) => {
  //         for (let entry of entries) {
  //             if (entry.target.offsetWidth > 0) {
  //                 // Perform specific task when offsetWidth is greater than 0
  //                 console.log(commentPartRef.current.offsetWidth);
  //                 // Add your specific task here
  //             }
  //         }
  //     };

  //     const observer = new ResizeObserver(handleResize);
  //     if (commentPartRef.current) {
  //         observer.observe(commentPartRef.current);
  //     }

  //     return () => {
  //         if (commentPartRef.current) {
  //             observer.unobserve(commentPartRef.current);
  //         }
  //     };
  // }, [commentPartRef]);

  const commentPartRef = useRef(null);
    const resizeTimeoutRef = useRef(null);

    useEffect(() => {
        const handleResize = (entries) => {
          for (let entry of entries) {
                clearTimeout(resizeTimeoutRef.current);
                resizeTimeoutRef.current = setTimeout(() => {
                    if (entry.target.offsetWidth > 0) {
                        // Perform specific task when offsetWidth is greater than 0 and size change has stopped
                
                        console.log('Component width is greater than 0 and size change has stopped');
                        // Add your specific task here
                    }
                }, 100); // 100ms after the last size change
            }
        };

        const observer = new ResizeObserver(handleResize);
  
        if (commentPartRef.current) {

            observer.observe(commentPartRef.current);
        }

        return () => {
            if (commentPartRef.current) {
                observer.unobserve(commentPartRef.current);
            }
            clearTimeout(resizeTimeoutRef.current);
        };
    }, []);
=======
export const DiaryInfo = ( props )=>{
    const { idx, imgContents, textContent, isLiked, likeCnt, commentCnt } = props.diary;
    const { isOpenModal, onClickModal, clipBoard } = useModel();
>>>>>>> 4adcdf97510b0eb7f57e64c2f9fc062a27be4a61
    
    console.log(commentPartRef.current);

    return (
        <S.DiaryInfo>

                <S.ContentPart>
                  <S.DiarySliderContainer>
                    <Slider sliderList={ imgContents } />
                  </S.DiarySliderContainer>

                  <S.DiaryContent>
<<<<<<< HEAD
                    {textContent}
                  </S.DiaryContent>
                </S.ContentPart>

                <S.CommentPart $openModal={openModal} ref={commentPartRef}>
                  <S.Cancel onClick={onClickModal}>
=======
                    { textContent }
                  </S.DiaryContent>
                </S.ContentPart>

                <S.CommentPart $openModal={ isOpenModal }>
                  <S.Cancel onClick={ onClickModal }>
>>>>>>> 4adcdf97510b0eb7f57e64c2f9fc062a27be4a61
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