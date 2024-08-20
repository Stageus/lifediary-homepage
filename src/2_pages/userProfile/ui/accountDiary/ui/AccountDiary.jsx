// Slice
import { S } from "./style";
import { useGetAccountDiary } from "../api/useGetAccountDiary"
// Layer
import { Thumbnail } from "@shared/ui";
import { useScroll, useRoute } from "@shared/hook";

export const AccountDiary = ( props ) => {

  const [ isEnd, isLoading, diaryList, getMyDiary ] = useGetAccountDiary( props );
  const [ watchRef ] = useScroll( getMyDiary );
  const { diaryRoute } = useRoute();

  return (
    <>
      { diaryList.length ? (
        diaryList?.map((diary) => {
          return (
            <S.diaryItem key={diary.idx} onClick={() => diaryRoute(diary.idx)}>
              <S.thumbnailWrap>
                <Thumbnail src={diary.thumbnail} />
              </S.thumbnailWrap>
              <S.diaryInfoWrap>
                <span>{diary.createdAt}</span>
              </S.diaryInfoWrap>
            </S.diaryItem>
          );
        })
      ) : (
        <S.guideMessage>작성한 일기가 없습니다</S.guideMessage>
      )}

      {!isEnd && diaryList && diaryList?.length % 10 === 0 && !isLoading && (
        <div ref={watchRef}>연속</div>
      )}
    </>
  );
};
