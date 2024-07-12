import styled from "styled-components";

const DiaryInfo = styled.div`
    margin-left: 100px;
    width: 90%;
    display: flex;
    justify-content: center;
    gap: 5px;
`;

// ContentPart _________________
const ContentPart = styled.div`
    flex: 0 0 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const DiarySliderContainer = styled.div`
    min-height: 300px;
`;

const DiaryContent = styled.div`
    max-height: 500px;
    white-space: pre-wrap;
    overflow-y: scroll;
    padding: 10px;
    border: 4px solid ${({theme}) => theme.minor};
    border-radius: 10px;
`;

// CommentPart _________________
const CommentPart = styled.div`
    position: relative;
    width: ${({$openModal}) => $openModal ? "400px" : "0px"};
    background-color: ${({theme}) => theme.minor};
    border-radius: 10px;
    transition: width 0.3s ease-out;
    overflow: hidden;
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
`;

export const S = {
    DiaryInfo,
    ContentPart,
    DiarySliderContainer,
    DiaryContent,
    CommentPart,
    Cancel,
    ButtonPart,
}
