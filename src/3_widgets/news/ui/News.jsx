// Slice
import { S } from "./style";
import { useOpenModal } from "../model/useOpenModal";
import { useGetNewNotice } from "../api/useGetNewNotice";
// Layer
import { DefaultBtn, Icon } from "@shared/ui";
import { NewsModal } from "@features/newsModal";

export const News = () => {

  const [ isNew ] = useGetNewNotice();
  const { isOpenModal, onClickOpen } = useOpenModal();

  return (
    <>
      <S.News>
        {/* 새로운 소식에 대한 알림 유/무 표시*/}
        {isNew ? (
          <S.NewsAlarm>
            <Icon type="alarm" color="white" size="20px" />
          </S.NewsAlarm>
        ) : null}

        {/* 알림 버튼 */}
        <S.NewsBtnWrap>
          <DefaultBtn text="알림" onClick={ onClickOpen }/>
        </S.NewsBtnWrap>

        {/* 모달 */}
        {isOpenModal 
        ? <NewsModal/> 
        : null}
      </S.News>
    </>
  );
};
