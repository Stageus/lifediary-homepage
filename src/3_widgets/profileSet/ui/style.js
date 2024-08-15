import styled from "styled-components";

const profileSet = styled.div`
    height: 100%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 80px;
`;

const userInfoArea = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    border: 2px solid ${({theme}) => theme.major};
    border-radius: 75px 20px 20px 75px;
    height: 150px;
    min-width: 600px;
`;

const imgWrap = styled.div`
    position: relative;
    width: 150px;
    height: 100%;
    display: flex;
`;

const imgBtnWrap = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    gap: 8px;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateY(130%);
`;

const infoWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const userInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const name = styled.span`
    text-align: center;
`;

const pageInfo = styled.div`
    font-size: 14px;
    color: gray;
`;

const btnWrap = styled.div`
    /*flex관련은 임시 */
    display: flex;
    gap: 10px;
    width: 100px;
`;






const tapArea = styled.div`
    flex-grow: 1;
`;

const tapHeader = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid ${({theme}) => theme.major};
`;

const tapBtnWrap = styled.div`
    display: flex;
    gap: 10px;

    & > button {
        border: none;
        padding: 8px 12px;
        border-radius: 10px 10px 0 0;
        background-color: ${({theme}) => theme.minor};
        color: ${({theme}) => theme.highlight};
        cursor: pointer;
    }
`;

const tapDateWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 3px;
`;

const tapContent = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 5px;
    padding: 20px 0;
`;

const diaryItem = styled.div`
    flex: 0 1 200px;
    border: 3px solid ${({theme}) => theme.minor};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    
`;

const thumbnailWrap = styled.div`
    height: 200px;
`;

const diaryInfoWrap = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 4px;
    align-items: center;
    font-size: 14px;
`;

export const S = {
    profileSet,
    userInfoArea,
    imgWrap,
    imgBtnWrap,
    infoWrap,
    userInfo,
    name,
    pageInfo,
    btnWrap,
    tapArea,
    tapHeader,
    tapBtnWrap,
    tapDateWrap,
    tapContent,
    diaryItem,
    thumbnailWrap,
    diaryInfoWrap,
};