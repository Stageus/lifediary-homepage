import styled from "styled-components";

const DiaryInfo = styled.div`
    min-height: 700px;
    width: fit-content;
    display: flex;
    justify-content: center;
    gap: 5px;
    position: relative;
`;

// ContentPart _________________
const ContentPart = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 3px solid ${({theme}) => theme.major};
    border-radius: 8px;
    padding: 4px;
`;

const DiarySliderContainer = styled.div`
    max-height: 300px;
`;

const DiaryContent = styled.div`
    white-space: pre-wrap;
    flex: 1 0 100px;
    overflow-y: scroll;
    padding: 2px;
    line-height: 150%;
`;

// CommentPart _________________
const CommentPart = styled.div`
    position: relative;
    width: ${({$openModal}) => $openModal ? "450px" : "0px"};
    background-color: ${({theme}) => theme.white};
    border-radius: 10px;
    transition: width 0.3s ease-out;
    overflow: hidden;
    z-index: 10;
`;

const Cancel = styled.div`
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
`;


// ButtonPart _________________
const ButtonPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 5px;
    z-index: 9999999;
`;

const CommentBtn = styled.div`
    width: 90px;
    background-color: ${( {theme, $isOpen} )=> $isOpen ? theme.highlight : theme.major};
    color: ${( {theme, $isOpen} ) => $isOpen ? theme.white : theme.white};
    border: 1px solid ${( {theme} )=> theme.major};
    border-radius: 4px;
    padding: 4px 6px;
    font-size: ${( {theme} ) => theme.fontSize.medium};
    font-weight: 500;
    box-shadow: 1px 1px 3px gray;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
`;

const SimpleBtnWrap = styled.div`
    border-radius: 6px;
    box-shadow: 1px 1px 3px gray;
`;


export const S = {
    DiaryInfo,
    ContentPart,
    DiarySliderContainer,
    DiaryContent,
    CommentPart,
    Cancel,
    ButtonPart,
    CommentBtn,
    SimpleBtnWrap
}
