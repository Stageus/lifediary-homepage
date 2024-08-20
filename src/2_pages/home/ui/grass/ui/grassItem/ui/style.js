import styled,{css} from "styled-components";

const GrassItem = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({$isColor}) => $isColor ?? "#80808057"};
    cursor: ${({$isColor}) => $isColor ? "pointer" : "not-allowed"};
`;

const Month = styled.div`
    position: absolute;
    top: 0;    
`;

const HoverInfo = styled.div`
    position: fixed;
    transform: translate(-25%, -80%);
    background-color: ${({theme}) => theme.highlight};
    color: ${({theme})=> theme.white};
    padding: 10px;
    padding-top: 5px;
    width: fit-content;
    z-index: 10;
    white-space: nowrap;
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
`;

export const S = {
    GrassItem,
    Month,
    HoverInfo
}