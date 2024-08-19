// Slice
import { S } from "./style";
import { useGetMyDiary } from "../api/useGetMyDiary";
// Layer
import { Thumbnail } from "@shared/ui";
import { useScroll } from "@shared/hook";

export const MyDiary = ( props ) => {

  const [ isEnd, isLoading, diaryList, getMyDiary ] = useGetMyDiary( props );
  const [ watchRef ] = useScroll( getMyDiary );

  return (
    <>
      { diaryList.length ? (
        diaryList?.map((diary) => {
          return (
            <S.diaryItem key={diary.idx}>
              <S.thumbnailWrap>
                <Thumbnail src={diary.thumbnail} />
              </S.thumbnailWrap>
              <S.diaryInfoWrap>
                <span>{diary.createdAt}</span>
                {diary.isPublic ? <span>공개</span> : <span>비공개</span>}
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
