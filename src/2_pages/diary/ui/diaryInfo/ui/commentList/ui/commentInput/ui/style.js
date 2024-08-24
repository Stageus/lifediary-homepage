import styled from "styled-components";

const InputArea = styled.div`
    background-color: red;
    display: flex;
    align-items: center;
    border: 1px solid ${( {theme} ) => theme.major};
    border-radius: 10px;
    overflow: hidden;
    background-color: white;
    padding-right: 5px;

    & > input {
        width: 100%;
        border: none;
        padding: 12px;
        outline: none;
        background-color: transparent;
    }

    & > div{
        border-radius: 5px;
        width: 50px;
        box-shadow: 1px 1px 3px gray;
    }
`;

export const S = {
    InputArea,
}