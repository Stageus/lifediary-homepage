import { S } from "./style";
import { NewsItem } from "./newsItem";
import { useGetNoticeList } from "../api/useGetNoticeList";
import { useScroll } from "@shared/hook";

/*
    [렌더링 과정]
    1. NewsModal jsx 렌더링
    2. 
*/

export const NewsModal = () => {

    const [ getNoticeList, noticeList, isLoading, errorMessage ] = useGetNoticeList();
    const [ rootRef, watchRef ] = useScroll( getNoticeList );

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
            
            { isLoading ? <div>로딩중</div> : null}

            { errorMessage ?? <div>{ errorMessage }</div>}

          </S.NewsModal>
        </>
    );
}