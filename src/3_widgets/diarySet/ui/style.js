import styled from "styled-components";

const diarySet = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    align-items: center;
    height: 100vh;
`;

const innerBox = styled.div`
    width: 600px;
`;

const content = styled.textarea`
    width: 100%;
    height: 250px;
    resize: none;
    border: 3px solid ${({theme}) => theme.major};
    border-radius: 8px;
    padding: 8px;
    outline: none;
`;
const optionArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
`;
const subArea = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    gap: 4px;
`;
const tagArea = styled.div`
    display: flex;
    flex: 1;
    font-size: 12px;
`;
const privateArea = styled.div`
    flex-basis: 100px;
    height: 33px;
    border: 2px solid ${({theme}) => theme.major};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1px;
    cursor: pointer;    

    & > div{
        width: 50%;
        height: 90%;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        font-weight: bold;
        padding: 4px;
        transition: transform 0.5s;
        background-color: ${({theme, $toggle}) => $toggle ? theme.highlight : theme.major};
        transform: ${({ $toggle }) => $toggle ? 'translateX(0)' : 'translateX(100%)'}; 
        color: ${({theme, $toggle}) => $toggle ? theme.white : theme.highlight};
        
    }
`;
const grassArea = styled.div`
    display: flex;
    align-items: center;
    gap:10px;
`;

const colorArea = styled.div`
    & > input {
        border: none;
        margin: 0;
        padding: 0;
        background-color: transparent;
        inline-size: 40px;
        cursor: pointer;

        &::-webkit-color-swatch {
        border-radius: 10px;
        border: none;
    }
    }
`;

const imgArea = styled.div`
    display: flex;
    align-items: center;
    gap:10px;

    & > label {
        border: 1px solid ${({theme}) => theme.highlight};
        background-color: ${({theme}) => theme.minor};
        padding: 6px 12px;
        border-radius: 4px;
        box-shadow: 1px 1px 3px gray;
        font-size: 12px;
        color: ${({theme}) => theme.highlight};
        cursor: pointer;
    }

    & > input {
        display: none;
    }
`;

const previewArea = styled.div`
    display: flex;
    gap: 12px;
`;

const previewItem = styled.div`
    position: relative;
    cursor: pointer;

    & > svg {
        position: absolute;
        top: -10px;
        right: -10px;
    }

    & > img {
        width: 100px;
        height: 100px;
        border-radius: 4px;
    }
`;



const btnArea = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
`;


export const S = {
    diarySet,
    innerBox,
    content,
    optionArea,
    subArea,
    tagArea,
    privateArea,
    grassArea,
    colorArea,
    imgArea,
    previewArea,
    previewItem,
    btnArea
};