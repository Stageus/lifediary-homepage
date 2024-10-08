import styled from "styled-components";

const SubscribeInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 5px;
    height: 100%;
    overflow-y: scroll;
`;

const SubscribeTitle = styled.h3`
    color: ${({theme}) => theme.black};
    padding: 10px;
    border-bottom: 2px solid ${({theme}) => theme.gray};
    font-weight: 600;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const SubscribeList = styled.div`
    padding: 0 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    overflow-y: scroll;
`;

const SubscribeItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    padding: 4px;
    cursor: pointer;
    border-radius: 5px;
    background-color: ${({$isSame, theme}) => $isSame ? theme.highlight : "transparent"};
    color: ${({$isSame, theme}) => $isSame ? theme.white : theme.black};

    &:hover {
        background-color: ${( {theme} ) => theme.highlight};
        color: ${({theme}) => theme.white};
    }

    & > img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }

    & > span{
        overflow: hidden;
        display: -webkit-box; 
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
`;

const message = styled.p`
    color: ${({theme}) => theme.gray};
    font-size: 12px;
    padding: 4px;
`;

const Loading = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
`;

export const S = {
    SubscribeInfo,
    SubscribeTitle,
    SubscribeList,
    SubscribeItem,
    Loading,
    message,
}