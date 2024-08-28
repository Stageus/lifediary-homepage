import styled from "styled-components";

// 리스트 부모
const Diary = styled.div`
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    
`; 

// 리스트
const ScrollItem = styled.div`
    flex: 1 0 100%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    scroll-snap-align: start;
    scroll-snap-stop: always;
`;

// 리스트 헤더
const DiaryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${({theme}) => theme.major};
    padding: 4px;
    border-radius: 8px;
`;

const DiaryHeaderWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;;
    
`;

const UserImg = styled.div`
    width: 34px;
    height: 34px;
    display: flex;
    border-radius: 50%;
    
    cursor: pointer;
    overflow: hidden;
`;

const UserName = styled.div`
    font-size: ${({theme})=> theme.fontSize.base};
    color: ${({theme}) => theme.black};
`;

const CreateDate = styled.div`
    font-size: ${({theme})=> theme.fontSize.medium};
    color: ${({theme}) => theme.black};
`;

const SubscribeWrap = styled.div`
    width: 80px;
    border-radius: 6px;
    box-shadow: 1px 1px 3px gray;
`;

const DiaryEditor = styled.div`
    display: flex;
    gap: 10px;
`;

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
    DiaryHeaderWrap,
    UserImg,
    UserName,
    CreateDate,
    SubscribeWrap,
    DiaryEditor,
    DiaryInfoContainer,
}