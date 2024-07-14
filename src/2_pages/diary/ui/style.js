import styled from "styled-components";

// 리스트 부모
const Diary = styled.div`
    height: calc(100vh - 80px);
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
`; 

// 리스트
const ScrollItem = styled.div`
    scroll-snap-align: start;
    scroll-snap-stop: always;
    flex: 1 0 100%;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: visible;
`;

// 리스트 헤더
const DiaryHeader = styled.div`
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
<<<<<<< HEAD
    cursor: pointer;
=======
>>>>>>> 7a5ab37efa2563bbd0d4d590dd09f13cdf50201b
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
// -----------------------------

const DiaryInfoContainer = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const S = {
    Diary,
    ScrollItem,
    DiaryHeader,
    DiaryHeaderContainer,
    UserImg,
    UserName,
    DiaryCt,
    DiarySubscribe,
    DiaryEditor,
    DiaryInfoContainer,
}