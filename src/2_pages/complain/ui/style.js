import styled from "styled-components";

const ComplainContent = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Table = styled.table`
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
    border-collapse: collapse;

    th{
        padding: 15px 5px;
        border-bottom: 1px solid gray;
        white-space: nowrap;
    }

    td{
        padding: 20px 8px;
        border-bottom: 1px solid gray;
        font-size: 14px;
        width: fit-content;
    }

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

const PageArrowBtn = styled.button`
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
    PageBtnContainer,
    PageArrowBtn,
    PageBtnList,
    Content
}