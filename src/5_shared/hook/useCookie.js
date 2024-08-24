import { useCookies } from "react-cookie";

export const useCookie = () => {

  const [ cookies, setCookie, removeCookie ] = useCookies();
  
  const cookieSet = ( name, value, period ) => {

    // 세션쿠키를 설정하기위해서는 MaxAge 와 Expires를 설정하지 않으면된다.
    // * 브라우저가 닫혔을경우에도 유지가 되는 현상이 있음 확인해봐야함
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
