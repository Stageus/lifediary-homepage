import { useState } from "react";
import { S } from "./style";
import { DefaultBtn } from "@shared/ui";

export const ComplainModal = () => {
    const [ isOpenModal, setIsOpenModal ] = useState( false );
    const onClickModal = () => setIsOpenModal( !isOpenModal );

    return (
        <>
            <DefaultBtn
            text= "신고"
            onClick= { onClickModal }
            />
            { isOpenModal 
            ? <S.ComplainModal>
                <S.ModalWrap>
                    <textarea
                    placeholder="신고 사유를 입력해주세요 (최소 5자 ~ 최대 300자)"
                    />
                    <S.ModalEditerWrap>
                        <DefaultBtn
                        text= "신고"
                        type= "disabled"
                        size= "medium"
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