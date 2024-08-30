import styled from "styled-components";

const messageModal = styled.div`
    position: fixed;
    background-color: #0000003d;
    width: 100%;
    height: 100%;
    z-index: 9999999;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const modalWrap = styled.div`
    background-color: white;
    border-radius: 10px;
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
`;

const message = styled.p`
    flex-grow: 1;
    color: ${({theme}) => theme.black};
    padding: 20px;
    font-weight: 600;
    white-space: pre;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const buttonWrap = styled.div`
    display: flex;
    gap: 10px;
`;

export const S = {
    messageModal,
    modalWrap,
    message,
    buttonWrap,
}