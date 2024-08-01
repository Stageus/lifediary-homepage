import { S } from "./style";
import { useMessage } from "@shared/store";
import { DefaultBtn } from "@shared/ui";

export const MessageModal = () => {

  const isMessage = useMessage( (state) => state.message );
  const isCallback = useMessage( (state) => state.callback );
  const cleanMessage = useMessage( (state) => state.cleanMessage );

  const onClickClean = () => {
    isCallback();
    cleanMessage();
  };

  return (
    <>
      {isMessage ? (
        <S.MessageModal onClick={()=>cleanMessage()}>
          <S.ModalWrap>
            <S.Message>{isMessage}</S.Message>
            <S.ButtonWrap>
            {isCallback ? (
              <>
                <DefaultBtn
                size="medium"
                text="확인"
                onClick={ onClickClean }
                />
                <DefaultBtn
                size="medium"
                text="취소"
                onClick={()=>cleanMessage()}
                />
              </>
            ) : (
              <DefaultBtn
              size="medium"
              text="확인"
              onClick={()=>cleanMessage()}
              />
            )}
            </S.ButtonWrap>
          </S.ModalWrap>
        </S.MessageModal>
      ) : null}
    </>
  );
};
