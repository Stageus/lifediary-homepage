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
    display: flex;
`;

const DiaryContainer = styled.div`
    display: flex;
`;

const DiaryInfo = styled.div`

`;

const DiaryImages = styled.div`
    width: 300px;
    height: 350px;
    outline: 1px solid black;
`;

const DiaryContent = styled.div`
    width: 300px;
    height: 350px;
    outline: 1px solid black;
`;
const DiaryComment = styled.div`
    width: 400px;
    height: 700px;
    outline: 1px solid black;
`;

const DiarySideList = styled.div`
    align-self: flex-end;
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
    DiaryImages,
    DiaryContent,
    DiaryComment,
    DiarySideList
}