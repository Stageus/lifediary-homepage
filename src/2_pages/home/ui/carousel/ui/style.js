import styled from "styled-components";

const Carousel = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    border-radius: 50%;
    background-color: ${({theme})=> theme.major};
    cursor: pointer;
`;

const ItemList = styled.div`
    display: flex;
    overflow: hidden;
`;

const ItemBundle = styled.div`
    flex-shrink: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    transition: transform 0.2s ease;
    transform: translateX(${({$postionUnit}) => $postionUnit * 100}%);
`;

const Item = styled.div`
    max-width: 190px;
    box-shadow: 3px 3px 7px gray;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 400px;
    overflow: hidden;
`;

const ThumbnailImgWrap = styled.div`
    flex-grow: 1;
    max-height: 300px;
    padding: 10px;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    gap: 10px;
    & > span{
            color: ${({theme}) => theme.black};
            font-size: ${({theme}) => theme.fontSize.medium};
        }
`;


const ProfileImgWrap = styled.div`
    width: 25px;
    height: 25px;
`;

export const S = {
    Carousel,
    Button,
    ItemList,
    ItemBundle,
    Item,
    UserInfo,
    ProfileImgWrap,
    ThumbnailImgWrap
}