import { S } from "./style";
import { useModel } from "../model/useModel";
import { DiaryInfo } from "@widgets/diaryInfo";
import { SubscribeBtn } from "@features/subscribeBtn";
import { DefaultBtn } from "@shared/ui";
import { parseTime } from "@shared/util";


export const Diary = () => {
  const { 
    diaryList, 
    onClickRoute,
    onClickTimeRoute, 
    scrollRef, 
    onScrollNext } = useModel();

  return (
    <>
      <S.Diary ref={scrollRef} onScroll={onScrollNext}>
        {diaryList &&
          diaryList.map((diary) => {
            return (

              <S.ScrollItem key={diary.idx}>
                <S.DiaryHeader>
                  <S.DiaryHeaderContainer>
                    <S.UserImg onClick={()=>onClickRoute(diary.isMine, diary.accountIdx)}>
                      <img src={diary.profileImg} alt="#" />
                    </S.UserImg>
                    <S.UserName>
                      <span>{diary.nickname}</span>
                    </S.UserName>
                    <S.DiaryCt>
                      <span>{parseTime(diary.createdAt)}</span>
                    </S.DiaryCt>
                    {diary.isMine 
                    ? null
                    : <S.DiarySubscribe>
                        <SubscribeBtn
                        isSubscribed={diary.isSubscribed}
                        accountIdx={diary.accountIdx}
                        />
                      </S.DiarySubscribe>
                    }
                  </S.DiaryHeaderContainer>

                  {diary.isMine
                  ? <S.DiaryEditor>
                    <div>
                      <DefaultBtn 
                      text="일기수정"
                      onClick={()=>onClickTimeRoute(diary.createdAt, diary.idx)}
                       />
                    </div>
                    <div>
                      <DefaultBtn 
                      text="일기삭제"
                      onClick={()=>{}}
                       />
                    </div>
                    </S.DiaryEditor>
                  : null}
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
