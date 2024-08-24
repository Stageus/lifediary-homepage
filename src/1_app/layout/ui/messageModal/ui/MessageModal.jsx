import { S } from "./style";
import { useMessage } from "@shared/store";
import { DefaultBtn } from "@shared/ui";

export const MessageModal = () => {

  const isMessage = useMessage( (state) => state.message );
  const isCallback = useMessage( (state) => state.callback );
  const cleanMessage = useMessage( (state) => state.cleanMessage );
  const btnOption = useMessage( (state) => state.btnOption );

  const onClickOk = () => {
    if ( isCallback ) isCallback();
    cleanMessage();
  };

  return (
    <>
      {isMessage ? (
        <S.messageModal onClick={()=>cleanMessage()}>
          <S.modalWrap>
            <S.message>{isMessage}</S.message>
            <S.buttonWrap>
              { btnOption 
              ?<>
                <DefaultBtn
                size="medium"
                text="확인"
                onClick={ onClickOk }
                />
                <DefaultBtn
                size="medium"
                text="취소"
                onClick={()=>cleanMessage()}
                />
               </>
              : <DefaultBtn
                size="medium"
                text="확인"
                onClick={ onClickOk }
                />
            }
            </S.buttonWrap>
          </S.modalWrap>
        </S.messageModal>
      ) : null}
    </>
  );
};
