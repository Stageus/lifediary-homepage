import styled from "styled-components";

const GrassWrap = styled.div`
    margin-top: 30px;
    min-width: 500px;
    width: 100%;
    min-height: 300px;
    box-shadow: 0px 1px 5px gray;
    padding: 10px;
    border-radius: 3px;
    border: 2px solid ${({theme})=> theme.major};
    font-weight: bolder;
    color: ${({theme}) => theme.gray};

    display: flex;
    flex-direction: column;
    
`;

const YearList = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding: 10px 0 30px 0;
`;

const Loading = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Grass = styled.div`
    width: 100%;
    max-width: fit-content;
    padding: 10px;
    padding-top: 30px;
    overflow-x: scroll;
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 3px;
`;

const DayOfWeekItem = styled.div`
    display: flex;
    align-items: center;
`;

const DayName = styled.p`
    font-size: 14px;
    padding-right: 20px;
`;

const DayList = styled.div`
    display: flex;
    gap: 3px;    
`;

export const S = {
    GrassWrap,
    YearList,
    Loading,
    Grass,
    DayOfWeekItem,
    DayName,
    DayList,
}