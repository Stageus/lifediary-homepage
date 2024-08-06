import styled from "styled-components";

const News = styled.div`
    position: relative;
`;

const NewsAlarm = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    background-color: ${({ theme }) => theme.highlight};
    display: flex;
    justify-content: center;
    border-radius: 50%;
    padding: 1px;
`;


export const S = {
    News,
    NewsAlarm,
}