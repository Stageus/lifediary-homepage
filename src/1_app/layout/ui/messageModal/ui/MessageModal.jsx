// Slice
import { S } from "./style";
// Layer
import { useMessage } from "@shared/store";
import { DefaultBtn } from "@shared/ui";

export const MessageModal = () => {

  // 저장소 message 여부 확인
  const isMessage = useMessage( (state) => state.message );
  // 저장소 callback 여부 확인
  const isCallback = useMessage( (state) => state.callback );
  // 저장소 상태 초기화
  const cleanMessage = useMessage( (state) => state.cleanMessage );
  // 저장소 button 옵션여부 확인
  const btnOption = useMessage( (state) => state.btnOption );

  const onClickOk = () => {
    // callback이 잇을경우에만 실행
    if ( isCallback ) isCallback();
    cleanMessage();
  };

  return (
    <>
      {/* message 상태여부에 따른 컴포넌트 활성화 */}
      {isMessage ? (
        // modal 부모 클릭시 저장소 상태 초기화
        <S.messageModal onClick={()=>cleanMessage()}>
          <S.modalWrap>
            <S.message>{isMessage}</S.message>
            <S.buttonWrap>
              {/* 버튼 옵션에 따른 선택적 버튼으로 변경 */}
              { btnOption 
              ?<>
                <DefaultBtn
                size="medium"
                type="select"
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
                type="select"
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
