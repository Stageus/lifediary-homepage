import { S } from "./style";
import { useModel } from "../model/useModel";
import { DefaultBtn } from "@shared/ui";

export const ComplainModal = ( props ) => {
    const { diaryidx } = props
    const { isOpenModal, isText, onClickModal, validation, onClickSubmit} = useModel( diaryidx );

    return (
        <>
            <DefaultBtn
            text= "신고"
            onClick= { onClickModal }
            />
            { isOpenModal 
            ? <S.ComplainModal>
                <S.ModalWrap $isText={isText}> 
                    <textarea
                    onInput={ ( text ) => validation(text) }
                    placeholder="신고 사유를 입력해주세요 (최소 5자 ~ 최대 300자)"
                    />
                    <S.ModalEditerWrap>
                        <DefaultBtn
                        text= "신고"
                        type= { isText ? "select" : "disabled"}
                        size= "medium"
                        onClick= { () => onClickSubmit( diaryidx, isText)}
                        />
                        <DefaultBtn
                        text= "취소"
                        size= "medium"
                        onClick= { onClickModal }
                        />
                    </S.ModalEditerWrap>
                </S.ModalWrap>
            </S.ComplainModal>
            : null }
        </>
    );
}