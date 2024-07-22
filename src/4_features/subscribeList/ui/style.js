import styled from "styled-components";

const SubscribeInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 5px;
    height: 100%;
`;

const SubscribeTitle = styled.h3`
    color: ${({theme}) => theme.gray};
    padding: 10px;
    border-bottom: 1px solid ${({theme}) => theme.gray};
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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        background-color: ${( {theme} ) => theme.major};
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

export const S = {
    SubscribeInfo,
    SubscribeTitle,
    SubscribeList,
    SubscribeItem
}