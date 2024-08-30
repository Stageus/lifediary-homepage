// Slice
import { S } from "./style";
import { useDeleteNotice } from "../api/useDeleteNotice";
// Layer
import { Icon } from "@shared/ui";
import { useRoute } from "@shared/hook";

export const NewsItem = ( props ) => {
  
  const { idx, nickname, diaryIdx, noticeType, createdAt, isRoutes } = props.item;
  const { diaryRoute } = useRoute();
  const [ deleteNotice, isDelete] = useDeleteNotice();

  return (
    <>
      {isDelete ? (
        <S.NewsItem 
        $isDelete={isRoutes !== "deletedMyDiary" || isRoutes !== "deletedDiary"}
        onClick={ () => isRoutes !== "deletedMyDiary" && isRoutes !== "deletedDiary" && diaryRoute( diaryIdx )}>
          <S.NewsInfo>
            {nickname 
            ? (
              <S.UserInfo>
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
