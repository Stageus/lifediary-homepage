import styled from "styled-components";

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

    & > p{
        font-size: 15px;
    }
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

const ReComment = styled.div`
    display: flex;
    gap: 12px;
`;

export const S = {
    ItemInfo,
    ImgWrap,
    ContentWrap,
    UserInfoWrap,
    UserInfo,
    UserEditor,
    ReComment
};