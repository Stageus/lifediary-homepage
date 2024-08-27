// Slice
import { S } from "./style";
import { useOpenModal } from "../model/useOpenModal";
import { useGetNewNotice } from "../api/useGetNewNotice";
import { NewsModal } from "./newsModal";
// Layer
import { DefaultBtn, Icon } from "@shared/ui";

export const News = () => {

  const [ isNew ] = useGetNewNotice();
  const { isOpenModal, onClickOpen, isClickedRef } = useOpenModal();

  return (
    <>
      <S.News>
        {/* 새로운 소식에 대한 알림 유/무 표시*/}
        { !isClickedRef.current && isNew ? (
          <S.NewsAlarm>
            <Icon type="alarm" color="white" size="20px" />
          </S.NewsAlarm>
        ) : null}

        {/* 알림 버튼 */}
        <DefaultBtn 
        size="medium"
        text="알림" 
        type={isOpenModal ? "select" : ""}
        onClick={ onClickOpen }/>

        {/* 모달 */}
        {isOpenModal 
        ? <NewsModal/> 
        : null}
      </S.News>
    </>
  );
};
