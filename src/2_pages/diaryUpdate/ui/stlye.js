import styled from "styled-components";

const diaryUpdate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

const componentsTitle = styled.h2`
    padding-top: 100px;
    flex-grow: 1;
    font-size: 30px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: left;
    font-weight: 500;
    color: ${({theme}) => theme.black};
    border: none;
    text-shadow: 0px 4px 2px ${({theme}) => theme.gray};
`;


export const S = {
    diaryUpdate,
    componentsTitle,
}
