import styled from "styled-components";

const Slider = styled.div`
<<<<<<< HEAD
    max-width: 1080px;
=======
    /* max-width: 1080px; */
    width: 100%;
>>>>>>> 82cb1994aecb9ae7d13fc1116e1a837c13f07b53
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
    overflow: hidden;
`;

const ItemContainer = styled.div`
    flex-shrink: 0;
    width: 100%;
    display: flex;
    gap: 10px;
    padding: 10px;
    transition: transform 0.2s ease;
    transform: translateX(${({$postionUnit}) => $postionUnit * 100}%);
`;

const Item = styled.div`
    flex-grow: 1;
    box-shadow: 3px 3px 7px gray;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 300px;
    overflow: hidden;
`;

const ContentImgContainer = styled.div`
    flex-grow: 1;
    max-height: 255px;
    padding: 10px;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 10px;
`;


const ProfileImgContainer = styled.div`
    width: 25px;
    height: 25px;
    & > span{
            color: ${({theme}) => theme.black};
            font-size: ${({theme}) => theme.fontSize.medium};
        }
`;


export const S = {
    Slider,
    Button,
    ItemList,
    ItemContainer,
    Item,
    UserInfo,
    ProfileImgContainer,
    ContentImgContainer
}