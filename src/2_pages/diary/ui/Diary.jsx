// Slice
import { S } from "./style";
import { useGetDiaryList } from "../api/useGetDiaryList";
import { DiaryInfo } from "../ui/diaryInfo";
import { DiaryDeleteBtn } from "./diaryDeleteBtn";
import { useUpdateUrl } from "../model/useUpdateUrl";
// Layer
import { SubscribeBtn } from "@features/subscribeBtn";
import { DefaultBtn, Profile } from "@shared/ui";
import { parseTime } from "@shared/util";
import { useRoute, useScroll } from "@shared/hook";

export const Diary = () => {

  const [ getDiaryList, diaryList, isLoading ] = useGetDiaryList();
  const { userProfileRoute, diaryUpdateRoute } = useRoute();
  const [ watchRef ] = useScroll(getDiaryList);
  const { parentRef } = useUpdateUrl( diaryList );

  return (
    <>
      <S.Diary ref={parentRef}>
        {diaryList.length !==0 &&
          diaryList.map(( diary ) => {
            return (
              <S.ScrollItem key={ diary.idx } data-diary-idx={diary.idx}>
                {/* 상단: 유저이미지, 이름, 일기작성날짜,  구독버튼, 일기수정, 일기삭제 */}
                <S.DiaryHeader>
                  <S.DiaryHeaderWrap>
                    {/* 유저이미지 */}
                    <S.UserImg onClick={ ()=>userProfileRoute( diary.accountIdx ) }>
                      <Profile img={ diary.profileImg }/>
                    </S.UserImg>
                    {/* 유저이름 */}
                    <S.UserName>
                      <span>{ diary.nickname }</span>
                    </S.UserName>
                    {/* 일기작성날짜 */}
                    <S.CreateDate>
                      <span>{ parseTime( diary.createdAt ) }</span>
                    </S.CreateDate>
                    {/* 구독버튼 */}
                    {diary.isMine 
                    ? null
                    : <S.SubscribeWrap>
                        <SubscribeBtn
                        {...diary}
                        />
                      </S.SubscribeWrap>
                    }
                  </S.DiaryHeaderWrap>

                    {/* 일기수정 버튼, 일기삭제 버튼*/}
                  {diary.isMine
                  ? <S.DiaryEditor>
                      <DefaultBtn 
                      size="medium"
                      text="일기수정"
                      onClick={ ()=> diaryUpdateRoute( diary.idx ) }
                       />
                      <DiaryDeleteBtn diaryIdx={diary.idx}/>
                    </S.DiaryEditor>
                  : null}
                </S.DiaryHeader>

                {/* 일기 이미지 및 일기내용 */}
                <S.DiaryInfoContainer>
                    <DiaryInfo key={ diary.idx } diary={ diary } />
                </S.DiaryInfoContainer>
              </S.ScrollItem>
            );
          })}

          { !isLoading && <div ref={ watchRef }/>}
          { isLoading ? <div>로딩중...</div> : null}
      </S.Diary>
    </>
  );
};
