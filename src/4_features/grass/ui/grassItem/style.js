import styled,{css} from "styled-components";

const GrassItem = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 2px;
    cursor: pointer;
    ${({ $date, $isExist, theme }) => $date 
    ? css`
        background-color: ${$isExist ? $isExist : theme.gray};
      `
    : css`
        background-color: transparent;
      `
    }

`;

const MonthItem = styled.div`
    white-space: nowrap;
    position: absolute;
    top: 0;
    
`;

const GrassItemInfo = styled.div`
    position: fixed;
    border-radius: 5px;
    transform: translate(0, -110%);
    background-color: ${({theme}) => theme.gray};
    color: ${({theme})=> theme.white};
    padding: 5px;
    width: fit-content;
    z-index: 10;
`;

export const S = {
    GrassItem,
    MonthItem,
    GrassItemInfo
}