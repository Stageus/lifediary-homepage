// Slice
import { S } from "./style";
import { NewsItem } from "./newsItem";
import { useGetNoticeList } from "../api/useGetNoticeList";
// Layer
import { useScroll } from "@shared/hook";

export const NewsModal = () => {

  const [ getNoticeList, noticeList, isLoading ] = useGetNoticeList();
  const [ watchRef ] = useScroll(getNoticeList);

  return (
    <>
      <S.NewsModal>
        {noticeList ? 
          noticeList.map((item, idx) => {
            return <NewsItem key={idx} item={item} />;
          }) : <S.message> 새로운 소식이 없습니다....</S.message>}

        { !isLoading &&  <div ref={watchRef}></div>}
        { isLoading ? <S.Loading>로딩중...</S.Loading> : null }
      </S.NewsModal>
    </>
  );
};
