import styled from "styled-components";

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

const GrassItem = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 2px;
    background-color: ${({$isExist,theme}) => $isExist && theme.gray};
`;

const MonthItem = styled.div`
    white-space: nowrap;
    position: absolute;
    top: 0;
    
`;

export const S = {
    Grass,
    DayOfWeekList,
    Dayofweek,
    GrassList,
    GrassItem,
    MonthItem
}