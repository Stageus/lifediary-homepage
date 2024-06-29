import styled from "styled-components";

const Aside = styled.div`
    min-height: 100%;
    background-color: ${({theme})=> theme.major};
`;

const BtnList = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const SubscribeInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 5px;
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
    gap: 5px;
`;

const SubscribeItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;


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
    Aside,
    BtnList,
    SubscribeInfo,
    SubscribeTitle,
    SubscribeList,
    SubscribeItem
}