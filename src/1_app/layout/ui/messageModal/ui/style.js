import styled from "styled-components";

const MessageModal = styled.div`
    position: fixed;
    background-color: #0000003d;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalWrap = styled.div`
    background-color: ${({theme}) => theme.major};
    border: 1px solid ${({theme}) => theme.highlight};
    border-radius: 10px;
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Message = styled.p`
    color: ${({theme}) => theme.highlight};
    padding: 20px;
`;

const ButtonWrap = styled.div`
    display: flex;
    gap: 10px;
`;

export const S = {
    MessageModal,
    ModalWrap,
    Message,
    ButtonWrap,
}