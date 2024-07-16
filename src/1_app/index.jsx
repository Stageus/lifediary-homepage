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
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <ThemeProvider theme={style}>
          <GlobalStyle />
          <RouterProvider router={Router} />
        </ThemeProvider>
      </GoogleOAuthProvider>
    </>
  );
};
