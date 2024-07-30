// Slice
import { S } from "./style";
import { useRoute } from "./model/useRoute";
import { useDeleteNotice } from "./api/useDeleteNotice";
// Layer
import { Icon } from "@shared/ui";

export const NewsItem = ( props ) => {
  
  const { idx, nickname, noticeType, createdAt } = props.item;
  const { onClickRoute } = useRoute();
  const [ deleteNotice, isDelete] = useDeleteNotice();
  

  return (
    <>
      {isDelete ? (
        <S.NewsItem>
          <S.NewsInfo>
            {nickname 
            ? (
              <S.UserInfo onClick={ () => onClickRoute( idx )}>
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
