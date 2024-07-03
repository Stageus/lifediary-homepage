import styled from "styled-components";

const ComplainContent = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Table = styled.table`
    max-width: 100%;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
    border-collapse: collapse;

    th{
        padding: 20px;
        border-bottom: 1px solid gray;
    }

    td{
        padding: 20px 10px;
        border-bottom: 1px solid gray;
    }

`;

const ThNumber = styled.th`
    min-width: 80px;
`;

const ThContent = styled.th`
    min-width: 400px;
`;

const ThUser = styled.th`
    min-width: 300px;
`;

const ThDate = styled.th`
    min-width: 150px;
`;

const ThState = styled.th`
    min-width: 80px;
`;

const ThBtn = styled.th`
    min-width: 250px;
`;

const BtnContainter = styled.div`
    display: flex;
    gap: 10px;
`;

const PageBtnContainer = styled.div`
    width: 400px;
    margin: 0 auto;
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const PageNextBtn = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    flex-basis: 50px;

`;

const PageBtnList = styled.div`
    display: flex;
    gap: 10px;
`;





export const S = {
    ComplainContent,
    Table,
    ThNumber,
    ThContent,
    ThUser,
    ThDate,
    ThState,
    ThBtn,
    BtnContainter,
    PageBtnContainer,
    PageNextBtn,
    PageBtnList,
}