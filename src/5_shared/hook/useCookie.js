import { useCookies } from "react-cookie";

export const useCookie = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["myCookie"]);

  const handleSetCookie = (name, value) => {
    const expires = new Date();
    expires.setDate(expires.getDate() + 1);
    setCookie(name, value, { expires });
  };

  const handleGetCookie = () => {
    return cookies.myCookie;
  };

  const handleRemoveCookie = (name) => {
    removeCookie(name);
  };

  return { handleSetCookie, handleGetCookie, handleRemoveCookie };
};
