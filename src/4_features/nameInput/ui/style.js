import styled from "styled-components";

const nameInput = styled.div`
    width: 100%;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const nameWrap = styled.div`
    flex-grow: 1;
    display: flex;
    border: 2px solid ${({theme}) => theme.major};
    border-radius: 8px;
    padding: 4px;
`;

const name = styled.input`
    outline: none;
    border: none;
    padding: 4px;
    flex-grow: 1;
    font-size: 12px;
`;

const checkWrap = styled.div`
    display: flex;
`;

const nameGuide = styled.span`
    color: red;
    font-size: 14px;
`;

export const S = {
    nameInput,
    nameWrap,
    name,
    checkWrap,
    nameGuide,
}