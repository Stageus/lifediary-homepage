import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router.jsx";
import { theme } from "./theme";
import { GlobalStyle } from "./globalStyle";
export const App = ()=>{
    const style = {
        fontSize: theme.fontSize,
        ...theme.light
    };

    return(
        <>
        <ThemeProvider theme={style}>
            <GlobalStyle/>
            <RouterProvider router={Router}/>
        </ThemeProvider>
        </>
    );
}