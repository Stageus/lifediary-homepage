import { useCookies } from "react-cookie";

export const useCookie = () => {

  const [ cookies, setCookie, removeCookie ] = useCookies();
  
  const cookieSet = ( name, value, period ) => {

    const newPeriod = new Date();
    newPeriod.setDate(newPeriod.getDate() + 12 * 60 * 60 * 1000);

    setCookie(name, value, { expires: period ?? newPeriod, path: "/" });
  };

  const cookieGet = ( cookieName ) => {
    return cookies[cookieName];
  }

  const cookieRemove = () => {
    Object.keys(cookies).forEach( cookie => {
      removeCookie(cookie);
    })
  };

  return { cookieSet, cookieGet, cookieRemove };
};
