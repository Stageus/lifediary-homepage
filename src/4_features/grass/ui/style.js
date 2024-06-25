import styled from "styled-components";


const Container = styled.div`
    padding: 10px;

    /*  */
    margin: 0 auto;
`;

const YearsBtn = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-end;
`;

const Grass = styled.div`
    display: grid;
    grid-template-columns: 50px;
    grid-template-rows: 50px;
    



    /*  */
    background-color: gray;
`;

const MonthList = styled.div`
    grid-column: 2;

    display: flex;
    justify-content: space-around;
    
`;

const DaysList = styled.div`
    grid-row: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DayItem = styled.div`
    padding: 10px;
`;

const GrassList = styled.div`
    display: grid;
    grid-template-rows: repeat(7, 1fr);
    grid-auto-flow: column;
    
    /* max-height: 117px; */
    /* display: flex; */
    /* flex-direction: column; */
    /* flex-wrap: wrap; */
`;

const GrassItem = styled.div`
    border-radius: 2px;
    padding: 10px;
    width: 15px;
    height: 15px;
    background-color: ${({$color})=> $color ?? "black"};

    /*  */
    outline: 1px solid white;
`;


export const S = {
    Container,
    YearsBtn,
    Grass,
    MonthList,
    DaysList,
    DayItem,
    GrassList,
    GrassItem,
}