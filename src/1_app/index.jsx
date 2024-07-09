import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router.jsx";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const App = () => {
  const style = {
    fontSize: theme.fontSize,
    ...theme.light,
  };

  return (
    <>
      <GoogleOAuthProvider clientId="1009079539109-7t2fm9taq0bhsroa1n5rbaeq9kb2fsvt.apps.googleusercontent.com">
        <ThemeProvider theme={style}>
          <GlobalStyle />
          <RouterProvider router={Router} />
        </ThemeProvider>
      </GoogleOAuthProvider>
    </>
  );
};
