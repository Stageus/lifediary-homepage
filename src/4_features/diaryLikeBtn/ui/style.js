import styled from "styled-components";

const DiaryLikeBtn = styled.div`
    width: 90px;
    background-color: ${( {theme, $isLike} )=> $isLike ? theme.highlight : theme.minor};
    color: ${( {theme, $isLike} ) => $isLike ? theme.white : theme.black};
    border: 2px solid ${( {theme} )=> theme.highlight};
    border-radius: 10px;
    padding: 4px 6px;
    font-size: ${( {theme} ) => theme.fontSize.medium};
    font-weight: 500;
    box-shadow: 1px 1px 3px gray;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
`;

export const S = {
    DiaryLikeBtn,

}