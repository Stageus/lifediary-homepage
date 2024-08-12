// Slice
import { S } from "./style";
import { NewsItem } from "./newsItem";
import { useGetNoticeList } from "../api/useGetNoticeList";
// Layer
import { useScroll } from "@shared/hook";

export const NewsModal = () => {

    const [ getNoticeList, noticeList, isLoading, errorMessage ] = useGetNoticeList();
    const [ watchRef ] = useScroll( getNoticeList );

    return(
        <>
          <S.NewsModal ref={ rootRef }>

            {noticeList 
                && noticeList.map( (item, idx) => {
                    return (
                        <NewsItem key={ idx } item={ item }/>
                    );
                })
            }

            {noticeList && noticeList.length >= 10 
                && <div ref={ watchRef }></div>
            }
            
            {/* 
                gif파일을 적용할경우는 gif를 받아오는 시간또한 딜레이가 생긴다
                해당부분은 좀더 고민해보기로
            */}
            { isLoading ? <S.Loading>로딩중...</S.Loading> : null}
            
            { errorMessage ?? <div>{ errorMessage }</div>}

          </S.NewsModal>
        </>
    );
}