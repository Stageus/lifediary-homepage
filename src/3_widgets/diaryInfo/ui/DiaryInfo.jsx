import { useEffect, useRef, useState } from "react";
import { S } from "./style"; 
import { Slider } from "./slider/ui";
import { Comment } from "./comment/ui";
import { DiaryLikeBtn } from "@features/diaryLikeBtn";
import { DefaultBtn } from "@shared/ui";
import { Icon } from "@shared/ui";

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
    
    console.log(commentPartRef.current);

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

                <S.CommentPart $openModal={openModal} ref={commentPartRef}>
                  <S.Cancel onClick={onClickModal}>
                    <Icon size="30px" type="cancel" color="#FF6767" />
                  </S.Cancel>
                  <Comment/>
                </S.CommentPart>
                
                <S.ButtonPart>
                    <DiaryLikeBtn
                    diaryIdx={idx}
                    likeCnt={likeCnt}
                    isLiked={isLiked}
                    />
                    <DefaultBtn text="댓글" onClick={onClickModal} />
                    <DefaultBtn text="공유" />
                    <DefaultBtn text="신고" />
                </S.ButtonPart>

        </S.DiaryInfo>
      );
}