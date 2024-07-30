// Slice
import { S } from "./style";
import { useRoute } from "../model/useRoute";
import { useGetDiaryList } from "../api/useGetDiaryList";
import { DiaryInfo } from "../ui/diaryInfo";
import { DiaryDeleteBtn } from "./diaryDeleteBtn";
// Layer
import { SubscribeBtn } from "@features/subscribeBtn";
import { DefaultBtn } from "@shared/ui";
import { parseTime } from "@shared/util";
import { useScroll } from "@shared/hook";

export const Diary = () => {

  const [ diaryList, getDiaryList, isLoading, errorMessage] = useGetDiaryList();
  const { onClickRoute, onClickTimeRoute } = useRoute();
  const [ rootRef, watchRef ] = useScroll( getDiaryList );    

  return (
    <>
      <S.Diary ref={ rootRef }>
        {diaryList &&
          diaryList.map(( diary ) => {
            return (
              <S.ScrollItem key={ diary.idx }>
                <S.DiaryHeader>
                  <S.DiaryHeaderWrap>
                    <S.UserImg onClick={ ()=>onClickRoute( diary.isMine, diary.accountIdx ) }>
                      <img src={ diary.profileImg } alt="#" />
                    </S.UserImg>
                    <S.UserName>
                      <span>{ diary.nickname }</span>
                    </S.UserName>
                    <S.CreateDate>
                      <span>{ parseTime( diary.createdAt ) }</span>
                    </S.CreateDate>
                    {diary.isMine 
                    ? null
                    : <S.SubscribeWrap>
                        <SubscribeBtn
                        isSubscribed={ diary.isSubscribed }
                        accountIdx={ diary.accountIdx }
                        />
                      </S.SubscribeWrap>
                    }
                  </S.DiaryHeaderWrap>

                  {diary.isMine
                  ? <S.DiaryEditor>
                    <div>
                      <DefaultBtn 
                      text="일기수정"
                      onClick={ ()=>onClickTimeRoute( diary.createdAt, diary.idx ) }
                       />
                    </div>
                    <div>
                      <DiaryDeleteBtn/>
                    </div>
                    </S.DiaryEditor>
                  : null}
                </S.DiaryHeader>

                <S.DiaryInfoContainer>
                    <DiaryInfo key={ diary.idx } diary={ diary } />
                </S.DiaryInfoContainer>
              </S.ScrollItem>
            );
          })}

          {diaryList && diaryList.length >= 10 
                && <div ref={ watchRef }></div>
          }

          { isLoading ? <div>로딩중...</div> : null}

          { errorMessage ?? <div>{ errorMessage }</div>}

      </S.Diary>
    </>
  );
};
