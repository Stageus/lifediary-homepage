import styled from "styled-components";

const Slider = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    border-radius: 50%;
    background-color: ${({theme})=> theme.major};
    cursor: pointer;
`;

const ItemList = styled.div`
    display: flex;
    flex: 1;
    overflow: hidden;
`;

const ItemContainer = styled.div`
    flex-shrink: 0;
    width: 100%;
    display: flex;
    gap: 10px;
    padding: 10px;
    transition: transform 0.5s ease;
    transform: translateX(${({$postionUnit}) => $postionUnit * 100}%)
`;

const Item = styled.div`
    flex: 1;
    box-shadow: 3px 3px 7px gray;
    border-radius: 10px;
    & > img {
        border-radius: 10px;
        width: 100%;
    }
`;

const UserInfo = styled.div`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 10px;
        gap: 10px;
        & > img{
            width: 25px;
        }
        & > span{
            color: ${({theme}) => theme.black};
            font-size: ${({theme}) => theme.fontSize.medium};
        }
`



export const S = {
    Slider,
    Button,
    ItemList,
    ItemContainer,
    Item,
    UserInfo,
}