import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
        margin: 0;
        padding: 0;
        font-size: 16px;
    }

    body{
        height: 100%;
        margin: 0;
        padding: 0;
    }

    *{
        box-sizing: border-box;
    }

    a{
        color: black;
        text-decoration: none;
    }

    h1,h2,h3,p{
        margin: 0;
        padding: 0;
        font-size: 1rem;
        font-weight: 400;
    }

    #root{
        height: 100%;
    }

    #test{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
`;
