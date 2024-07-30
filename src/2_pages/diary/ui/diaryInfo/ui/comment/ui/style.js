import styled from "styled-components";

const Comment = styled.div`
    height: 100%;
    padding: 15px;
    color: ${( {theme} ) => theme.black};
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
`;

const TitleArea = styled.h2`
    font-size: ${( {theme} ) => theme.fontSize.x_large};
    font-weight: bolder;
`;

const ContentArea = styled.div`
    flex: 1 0 100px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: auto;
`;

const ItemInfo = styled.div`
    display: flex;
    gap: 12px;
`;

const ImgWrap = styled.div`
    flex: 0 0 34px;
    & > img{
        width: 100%;
        border-radius: 50%;
    }
`;

const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px; 
`;

const UserInfoWrap = styled.div`
    display: flex;
    gap: 10px;
`;

const UserInfo = styled.div`
    display: flex;
    gap: 10px;
    color: ${( {theme} ) => theme.gray};
    font-size: ${( {theme} ) => theme.fontSize.medium};
`;

const UserEditor = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${( {theme} ) => theme.highlight};
    font-size: ${( {theme} ) => theme.fontSize.medium};
    & > span {
        cursor: pointer;
    }
`;

const Content = styled.div`
    /* background-color: gray; */
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
    TitleArea,
    ContentArea,
    ItemInfo,
    ImgWrap,
    ContentWrap,
    UserInfoWrap,
    UserInfo,
    UserEditor,
    Content,
    ReComment,
    InputArea,
};