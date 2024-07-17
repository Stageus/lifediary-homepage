import styled from "styled-components";

const News = styled.div`
    position: relative;
`;

const NewsBtnWrap = styled.div`
    box-shadow: 1px 1px 3px gray;
    border-radius: 4px;
`;

const NewsModal = styled.div`
    position: absolute;
    top: 150%;
    left: 12%;
    width: 350px;
    height: 400px;
    transform: translateX(-50%);
    background-color: ${( {theme }) => theme.minor};
    border-radius: 10px;
    border: 1px solid ${( {theme} ) => theme.highlight};
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 2;
`;

const NewsItem = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 15px;
    align-items: center;
    border-radius: 5px;
    padding: 5px;

    &:hover {
        background-color: ${( {theme}) => theme.major};
        
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
    News,
    NewsBtnWrap,
    NewsModal,
    NewsItem,
    NewsInfo,
    UserInfo,
    Name,
    Time,
    NewsContent,
    DeleteBtnWrap,
}