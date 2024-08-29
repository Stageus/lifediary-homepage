import styled from "styled-components";

const NewsItem = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 15px;
    align-items: center;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;

    &:hover {
        background-color: ${( {theme }) => theme.white};
        
    }
`;

const NewsInfo = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const UserInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Name = styled.span`
    color: ${( {theme}) => theme.black};
    font-size: ${( {theme}) => theme.fontSize.base};
    cursor: pointer;
`;

const Time = styled.span`
    color: ${( {theme}) => theme.gray};
    font-size: ${( {theme}) => theme.fontSize.medium};
`;

const NewsContent = styled.div`
    font-size: ${( {theme}) => theme.fontSize.medium};
    color: ${( {theme}) => theme.gray};
    display: flex;
    gap: 10px;
`;

const DeleteBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
`;


export const S = {
    NewsItem,
    NewsInfo,
    UserInfo,
    Name,
    Time,
    NewsContent,
    DeleteBtnWrap,
}