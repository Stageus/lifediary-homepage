import styled from "styled-components";

const Diary = styled.div`
    padding: 20px 15px;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const DiaryHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const DiaryHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const UserImg = styled.div`
    width: 34px;
    height: 34px;
    display: flex;
    border-radius: 50%;
    & > img{
        width: 100%;
    }
`;

const UserName = styled.div`
    font-size: ${({theme})=> theme.fontSize.base};
    color: ${({theme}) => theme.black};
`;

const DiaryCt = styled.div`
    font-size: ${({theme})=> theme.fontSize.medium};
    color: ${({theme}) => theme.black};
`;

const DiarySubscribe = styled.div`
    width: 80px;
`;

const DiaryEditor = styled.div`
    display: flex;
    gap: 10px;
`;

const DiaryMain = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DiaryMainWrap = styled.div`
    position: relative;
    display: flex;
`;

const DiaryContainer = styled.div`
    display: flex;
    gap:5px;
`;

const DiaryInfo = styled.div`
    width: 350px;
    height: 700px;
`;

const DiaryImgContainer = styled.div`
    height: 300px;
    position: relative;
`;

const DiaryContent = styled.div`
    margin: 0;
    height: 400px;
    white-space: pre-wrap;
    padding: 10px;
    overflow: scroll;
    border: 4px solid ${({theme}) => theme.minor};
    border-radius: 10px;
`;
const DiaryComment = styled.div`
    position: relative;
    width: ${({$openModal}) => $openModal ? "400px" : "0px"};
    height: 700px;
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


const DiarySideList = styled.div`
    position: absolute;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 10px;
    right: 0;
    transform: translate(100%, 0);
`;

export const S = {
    Diary,
    DiaryHeader,
    DiaryHeaderContainer,
    UserImg,
    UserName,
    DiaryCt,
    DiarySubscribe,
    DiaryEditor,
    DiaryMainWrap,
    DiaryContainer,
    DiaryMain,
    DiaryInfo,
    DiaryImgContainer,
    DiaryContent,
    DiaryComment,
    Cancel,
    DiarySideList,
}