import styled from "styled-components";

const NewsModal = styled.div`
    overflow-y: scroll;
    position: absolute;
    top: 150%;
    left: 12%;
    width: 350px;
    height: 400px;
    transform: translateX(-50%);
    background-color: ${( {theme }) => theme.minor};
    border-radius: 10px;
    border: 1px solid ${( {theme} ) => theme.highlight};
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 2;
`;

const Loading = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
`;

export const S = {
    NewsModal,
    Loading
}