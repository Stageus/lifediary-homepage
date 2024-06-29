import styled from "styled-components";

const Container = styled.div`
    min-height: 100%;
    width: fit-content;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: gray;
`;

const Introduction = styled.div`
    display: flex;
    gap: 10px;
    width: 1080px;
    padding: 20px;
    min-height: calc(100vh - 80px);
`;

const SectionFirst = styled.div`
    flex: 1;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: url(${({$img}) => $img}) no-repeat center center / cover;
    
`;

const SectionFirstContent = styled.div`
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

const SectionSecond = styled.div`
    flex: 1;
    border-radius: 10px;
    background: url(${({$img}) => $img}) no-repeat center center / cover;
`;

const SliderSection = styled.div`
`;

export const S = {
    Container,
    Introduction,
    SectionFirst,
    SectionFirstContent,
    SectionSecond,
    SliderSection
}