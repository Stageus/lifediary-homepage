import styled from "styled-components";

const GrassContainer = styled.div`
    min-width: 500px;
    width: 100%;
    box-shadow: 0px 1px 5px gray;
    padding: 10px;
    border-radius: 3px;
    border: 2px solid ${({theme})=> theme.major};
    font-weight: bolder;
    color: ${({theme}) => theme.gray};
`;

const YearBtnList = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding: 10px 0 30px 0;
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

const DayOfWeekList = styled.div`
    display: flex;
    align-items: center;
`;

const Dayofweek = styled.p`
    font-size: 14px;
    padding-right: 20px;
`;

const GrassList = styled.div`
    display: flex;
    gap: 3px;    
`;

export const S = {
    GrassContainer,
    YearBtnList,
    Grass,
    DayOfWeekList,
    Dayofweek,
    GrassList,
}