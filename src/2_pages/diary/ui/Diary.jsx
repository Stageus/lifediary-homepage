import { useEffect, useRef } from "react";
import { S } from "./style";
import { useGetDiaryList } from "../api/useGetDiaryList";
import { DiaryInfo } from "@widgets/diaryInfo";
import { SubscribeBtn } from "@features/subscribeBtn";
import { DefaultBtn } from "@shared/ui";

export const Diary = () => {
  const [diaryList, nextPage] = useGetDiaryList();

//   const scrollRef = useRef(null);
//   useEffect(() => {
//     const handleScroll = () => {
//       if (scrollRef.current) {
//         const position = scrollRef.current.scrollTop;
//         console.log(position);
//       }
//     };

//     const scrollElement = scrollRef.current;
//     if (scrollElement) {
//       scrollElement.addEventListener("scroll", handleScroll);
//     }

//     return () => {
//       if (scrollElement) {
//         scrollElement.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, []);
//   console.log(scrollRef);

  return (
    <>
      <S.Diary>
        {diaryList &&
          diaryList.map((diary) => {
            return (
              <S.ScrollItem key={diary.idx}>
                <S.DiaryHeader>
                  <S.DiaryHeaderContainer>
                    <S.UserImg>
                      <img src={diary.profileImg} alt="#" />
                    </S.UserImg>

                    <S.UserName>
                      <span>{diary.nickname}</span>
                    </S.UserName>

                    <S.DiaryCt>
                      <span>{diary.createdAt}</span>
                    </S.DiaryCt>

                    <S.DiarySubscribe>
                      <SubscribeBtn
                        isSubscribed={diary.isSubscribed}
                        accountIdx={diary.idx}
                      />
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

                <S.DiaryInfoContainer>
                    <DiaryInfo key={diary.idx} diary={diary} />
                </S.DiaryInfoContainer>
              </S.ScrollItem>
            );
          })}
      </S.Diary>
    </>
  );
};
