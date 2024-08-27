// Slice
import { S } from "./style";
import { useDeleteNotice } from "../api/useDeleteNotice";
// Layer
import { Icon } from "@shared/ui";
import { useRoute } from "@shared/hook";

export const NewsItem = ( props ) => {
  
  const { idx, nickname, diaryIdx, noticeType, createdAt } = props.item;
  const { diaryRoute } = useRoute();
  const [ deleteNotice, isDelete] = useDeleteNotice();

  return (
    <>
      {isDelete ? (
        <S.NewsItem>
          <S.NewsInfo>
            {nickname 
            ? (
              <S.UserInfo onClick={ () => diaryRoute( diaryIdx )}>
                <S.Name>{ nickname }</S.Name>
              </S.UserInfo>
            ) 
            : null}

            <S.NewsContent>
              <span> { noticeType } </span>
              <span> { createdAt } </span>
            </S.NewsContent>
          </S.NewsInfo>

          <S.DeleteBtnWrap onClick={ () => deleteNotice( idx ) }>
            <Icon type="cancel" color="red" />
          </S.DeleteBtnWrap>
        </S.NewsItem>
      ) : null}
    </>
  );
};
