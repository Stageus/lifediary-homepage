// Npm
import { useState } from "react";
// Slice
import { S } from "./style";
import { useOpenModal } from "../model/useOpenModal";
import { useValidation } from "../model/useValidation";
import { usePostComplain } from "../api/usePostComplain";
// Layer
import { DefaultBtn } from "@shared/ui";

export const ComplainModal = ( props ) => {

    const { diaryidx } = props;
    const { isOpenModal, onClickModal } = useOpenModal();
    const { complainTextRef, isValidation, onChangeCheck } = useValidation();
    const [ onClickSubmit ] = usePostComplain( onClickModal );

    return (
        <>
            <DefaultBtn
            text= "신고"
            onClick= { onClickModal }
            />
            { isOpenModal 
            ? <S.ComplainModal>
                <S.ModalWrap $isText={ isValidation }> 
                    <textarea
                    minLength={5}
                    maxLength={300}
                    ref={ complainTextRef }
                    onChange={ onChangeCheck }
                    placeholder="신고 사유를 입력해주세요 (최소 5자 ~ 최대 300자)"
                    />
                    <S.ModalEditerWrap>
                        <DefaultBtn
                        text= "신고"
                        type= { isValidation ? "select" : "disabled"}
                        size= "medium"
                        onClick= { () => onClickSubmit( diaryidx, complainTextRef.current.value)}
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