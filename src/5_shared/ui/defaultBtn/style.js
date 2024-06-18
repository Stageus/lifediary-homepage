import styled from "styled-components";

const DefaultBtn = styled.button`
    display: block;
    border-radius: 4px;
    border-width: 2px;
    border-style: solid;
    cursor: pointer;
    padding: ${({px})=> px ?? "8px"} ${({py})=> py ?? "16px"};
    font-size: ${({fontSize, theme}) => fontSize ?? theme.fontSize.base};
    color: ${({type, theme}) => type ? theme.white : theme.highlight};
    ${({type,theme}) => {
        switch(type) {
            case "select":
                return `
                    background-color:${theme.highlight};
                    border-color: ${theme.highlight};
                `
            case "disabled":
                return `
                    cursor: not-allowed;
                    background-color:${theme.gray};
                    border-color: ${theme.gray};
                `
            default:
                return `
                    background-color:${theme.major};
                    border-color: ${theme.highlight};
                `
        }
    }};
    
    
`;

export const S = {
    DefaultBtn,
}