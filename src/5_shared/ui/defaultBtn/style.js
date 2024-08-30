import styled from "styled-components";

const DefaultBtn = styled.button`
    display: block;
    width: 100%;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
    color: white;
    white-space: nowrap;
    box-shadow: ${({$shadow}) => $shadow ? "2px 2px 4px #8080808c" : "none"};

    ${({$size, theme})=>{
        switch($size){
            case "Xsmail":
                return`
                    padding: 2px 4px;
                    font-size: ${theme.fontSize.x_small};
                `
            case "smail":
                return`
                    padding: 4px 8px;
                    font-size: ${theme.fontSize.smail};
                `
            case "medium":
                return`
                    padding: 6px 12px;
                    font-size: ${theme.fontSize.medium};
                `
            default:
                return`
                    padding: 8px 16px;
                    font-size: ${theme.fontSize.base};
                `
        }
    }}
    
    ${({$type,theme}) => {
        switch($type) {
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
                    border-color: ${theme.major};
                `
        }
    }};
    
    
`;

export const S = {
    DefaultBtn,
}