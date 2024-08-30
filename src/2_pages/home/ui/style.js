import styled from "styled-components";

const Home = styled.div`
    min-height: 100%;
    width: 1080px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 5px 5px 10px;
    gap: 30px;
`;

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

const componentsTitle = styled.h2`
    font-size: 25px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: left;
    font-weight: 500;
    color: ${({theme}) => theme.black};
    border: none;
    text-shadow: 0px 4px 2px ${({theme}) => theme.gray};
`;

export const S = {
    Home,
    Introduction,
    FirstArea,
    Content,
    SecondArea,
    componentsTitle,
}