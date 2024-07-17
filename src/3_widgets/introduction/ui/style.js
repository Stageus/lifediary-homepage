import styled from "styled-components";

const Introduction = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    padding: 20px;
    min-height: calc(100vh - 80px);
`;

const FirstArea = styled.div`
    flex: 1;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: url(${({$img}) => $img}) no-repeat center center / cover;
    
`;

const Content = styled.div`
    color: ${({theme}) => theme.white};
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > h1 {
        font-size: 40px;
    }

    & > p {
        padding: 10px 0px;
        white-space: pre-wrap;
    }
`;

const SecondArea = styled.div`
    flex: 1;
    border-radius: 10px;
    background: url(${({$img}) => $img}) no-repeat center center / cover;
`;

export const S = {
    Introduction,
    FirstArea,
    Content,
    SecondArea,
}