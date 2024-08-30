import styled from "styled-components";

const NewsModal = styled.div`
    overflow-y: scroll;
    position: absolute;
    top: 150%;
    left: -260%;
    width: 350px;
    height: 400px;
    transform: translateX(-50%);
    background-color: white;
    box-shadow: 3px 3px 8px ${( {theme }) => theme.gray};
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 2;
`;

const message = styled.p`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.black};
    
`;

const Loading = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
`;

export const S = {
    NewsModal,
    message,
    Loading
}