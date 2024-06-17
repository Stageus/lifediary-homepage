import { ThemeProvider } from "styled-components";
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
        </ThemeProvider>
        </>
    );
}