import styled from "styled-components";

const Slider = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const LeftBtn = styled.div`
    display: flex;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(2px, -50%);
    border-radius: 50%;
    background-color: ${({$isNext, theme}) => $isNext ? theme.highlight : theme.gray};
    z-index: 1;
    cursor: ${({$isNext}) => $isNext ? "pointer" : "not-allowed"};

`;
const RightBtn = styled.div`
    display: flex;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-2px, -50%);
    border-radius: 50%;
    background-color: ${({$isNext, theme}) => $isNext ? theme.highlight : theme.gray};
    z-index: 1;
    cursor: ${({$isNext}) => $isNext ? "pointer" : "not-allowed"};
`;

const ItemContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    
    & > div{
        flex-shrink: 0;
        width: 100%;
        transition: all 0.5s;
        transform: translateX(${({$positionUnit}) => $positionUnit * 100}%);
    }
    
`;

const ItemPosition = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    position: absolute;
    bottom: 10px;
    right: 0;
    left: 0;
    transition: 1s;
`;

const Item = styled.div`
    width: 30px;
    height: 10px;
    background-color: ${({$isSame, theme}) => $isSame ? theme.highlight : theme.white};
    border-radius: 20px;
    cursor: pointer;
`;

export const S = {
    Slider,
    LeftBtn,
    RightBtn,
    ItemContainer,
    ItemPosition,
    Item
}