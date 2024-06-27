import styled from "styled-components";

const GrassContainer = styled.div`
    width: fit-content;
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