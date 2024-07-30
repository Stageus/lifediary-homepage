import styled from "styled-components";

const Comment = styled.div`
    height: 100%;
    padding: 15px;
    color: ${( {theme} ) => theme.black};
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const CommentWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 5px;
`;

const TitleArea = styled.h2`
    font-size: ${( {theme} ) => theme.fontSize.x_large};
    font-weight: bolder;
`;

const ContentArea = styled.div`
    flex: 1 0 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: scroll;
`;


const ReComment = styled.div`
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


export const S = {
    Comment,
    CommentWrap,
    TitleArea,
    ContentArea,
    ReComment,
    InputArea,
};