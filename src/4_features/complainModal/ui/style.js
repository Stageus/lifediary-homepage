import styled from "styled-components";

const ComplainModal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #0000004d;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalWrap = styled.div`
    background-color: ${( {theme} ) => theme.major};
    border-radius: 10px;
    width: 350px;
    height: 400px;
    padding: 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;

    & > textarea {
        padding: 10px;
        flex: 1;
        border-radius: 10px;
        border: none;
        font-size: ${( {theme} ) => theme.fontSize.medium};
        resize: none;
        outline: none;
    }
`;

const ModalEditerWrap = styled.div`
    display: flex;
    gap: 10px;
    width: 150px;
    margin: 0 auto;
`;

export const S = {
    ComplainModal,
    ModalWrap,
    ModalEditerWrap

}