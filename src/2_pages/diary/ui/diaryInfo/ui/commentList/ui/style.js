import styled from "styled-components";

const commentList = styled.div`
    height: 100%;
    padding: 15px;
    color: ${( {theme} ) => theme.black};
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > p{
        white-space: pre-wrap;
        width: 100%;
        background-color: red;
        /* word-wrap: break-word; */
        /* overflow-wrap: break-word; */
    }
`;

const titleArea = styled.h2`
    font-size: ${( {theme} ) => theme.fontSize.x_large};
    font-weight: bolder;
`;


const commentListArea = styled.div`
    flex: 1 0 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: scroll;
`;


const reply = styled.div`
    display: flex;
    gap: 12px;
`;

const InputArea = styled.div`
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

const message = styled.p`
    padding: 10px;
    color: ${({theme}) => theme.gray};
`;


export const S = {
    commentList,
    titleArea,
    commentListArea,
    reply,
    InputArea,
    message,
};