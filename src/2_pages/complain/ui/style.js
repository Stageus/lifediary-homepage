import styled from "styled-components";

const ComplainContent = styled.div`
    min-width: 920px;
    min-height: 600px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Table = styled.table`
    /* flex-grow: 1; */
    width: 100%;
    padding: 10px;
    text-align: center;
    border-collapse: collapse;

    th{
        padding: 15px 5px;
        border-bottom: 2px solid gray;
        white-space: nowrap;
        color: gray;
    }

    td{
        padding: 20px 8px;
        border-bottom: 2px solid #ececec;
        font-size: 14px;
        width: fit-content;
    }

`;

const number = styled.th`
    width: 50px;
`;
const thState= styled.th`
    width: 60px;
`;
const Content = styled.th`
    width: 400px;
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


const pageBtn = styled.button`
    border: none;
    background-color: transparent;
    flex-basis: 50px;
    font-size: 20px;
`;

const leftBtn = styled(pageBtn)`
    color: ${({$isdisabled, theme}) => $isdisabled ? theme.gray : theme.highlight};
    cursor: ${({$isdisabled}) => $isdisabled ? "not-allowed" : "pointer"};
`;

const rightBtn = styled(pageBtn)`
    color: ${({$isdisabled, theme}) => $isdisabled ? theme.gray : theme.highlight};
    cursor: ${({$isdisabled}) => $isdisabled ? "not-allowed" : "pointer"};
`;


const PageBtnList = styled.div`
    display: flex;;
    gap: 10px;
`;


export const S = {
    ComplainContent,
    Table,
    PageBtnContainer,
    leftBtn,
    rightBtn,
    PageBtnList,
    number,
    thState,
    Content
}