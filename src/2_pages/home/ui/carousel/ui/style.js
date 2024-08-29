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
    width: 190px;
    box-shadow: 3px 3px 8px gray;
    border-radius: 10px;
    cursor: ${({$isDiary}) =>  $isDiary ? "pointer" : "not-allowed"};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 400px;
    overflow: hidden;    
    
    &:hover {
       background-color: ${({theme}) => theme.minor};
       transition: 0.5s;
       transform: scale(1.04);
       
    }
`;

const ThumbnailImgWrap = styled.div`
    flex-grow: 1;
    max-height: 300px;
    padding: 10px;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 12px;

    & > span{
            color: ${({theme}) => theme.black};
            font-size: ${({theme}) => theme.fontSize.medium};
            font-weight: 500;
            font-family: Arial, Helvetica, sans-serif;
            text-shadow: 0px 3px 3px ${({theme}) => theme.gray};
        }
`;


const ProfileImgWrap = styled.div`
    min-width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
`;

const notFoundText = styled.div`
    height: 100%;
    background-color: #8080804d;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

export const S = {
    Carousel,
    Button,
    ItemList,
    ItemBundle,
    Item,
    UserInfo,
    ProfileImgWrap,
    ThumbnailImgWrap,
    notFoundText,
}