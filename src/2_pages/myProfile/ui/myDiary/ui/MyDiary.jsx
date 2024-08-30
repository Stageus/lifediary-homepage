// Slice
import { S } from "./style";
import { useGetMyDiary } from "../api/useGetMyDiary";
// Layer
import { Thumbnail } from "@shared/ui";
import { useScroll, useRoute } from "@shared/hook";

export const MyDiary = ( props ) => {

  const [ isLoading, diaryList, getMyDiary ] = useGetMyDiary( props );
  const [ watchRef ] = useScroll( getMyDiary );
  const { diaryRoute } = useRoute();

  return (
    <>
      { diaryList.length !== 0 ? (
        diaryList?.map((diary) => {
          return (
            <S.diaryItem key={diary.idx} onClick={() => diaryRoute(diary.idx)}>
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

      { !isLoading && <div ref={ watchRef }/>}
      { isLoading ? <div>로딩중...</div> : null}
    </>
  );
};
