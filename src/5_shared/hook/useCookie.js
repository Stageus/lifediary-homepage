import { useCookies } from "react-cookie";


/*
  cookie의 사용처는 다양해야함
  로그인했을시에 권한을 저장할쿠키
  로그인했을시에 토큰을 저장할쿠키
  로그아웃 했을시에 권한 & 토큰을 삭제할쿠키
  로그인했을시에 사용자정보를 저장할 쿠키
*/
export const useCookie = () => {

  const [ cookies, setCookie, removeCookie ] = useCookies(["myCookie"]);
  
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
