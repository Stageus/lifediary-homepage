import styled,{css} from "styled-components";

const GrassItem = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 2px;    
    ${({ $date, $isExist, theme }) => $date 
    ? css`
        background-color: ${$isExist ? $isExist : theme.gray};
        cursor: pointer;
      `
    : css`
        background-color: transparent;
      `
    }

`;

const Month = styled.div`
    white-space: nowrap;
    position: absolute;
    top: 0;
    
`;

const HoverInfo = styled.div`
    position: fixed;
    border-radius: 5px;
    transform: translate(0, -110%);
    background-color: ${({theme}) => theme.highlight};
    color: ${({theme})=> theme.white};
    padding: 5px;
    width: fit-content;
    z-index: 10;
    white-space: nowrap;
`;

export const S = {
    GrassItem,
    Month,
    HoverInfo
}