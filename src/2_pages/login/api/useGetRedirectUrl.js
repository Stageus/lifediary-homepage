import { useEffect } from "react";
import { useFetch, useCookie } from "@shared/hook";


/*
  1. 클라이언트 요청: /account/login/oauth/google
  2  백엔드에서 응답: googleUrl/redirect?code=N
  3. 클라이언트에 응답받은 url로 리다이렉트
  4. google ID, PW 입력끝나면 -> 백엔드 지정해준 경로로 암호화된데이털 query
  5. url?code=N 있냐? 있다면
  6. /login/oauth/google/redirect?code=암호화된데이터로 요청
  7. 응답받은데이터로 리다이렉트의 경로를 설정해주면됨

  # google ID, PW을 입력이 끝난상태를, 클라이언트가 어떻게 알수있냐?
*/
export const useGetRedirectUrl = () => {
  const [ fetchData, baseFetch ] = useFetch();
  const { handleSetCookie } = useCookie();

  const getRedirectUrl = () => {
    baseFetch("login/oauth/google");
  };

  useEffect(() => {
    if ( !fetchData ) return;

    if ( fetchData.status === 200 ){
        window.location.href = fetchData.data.redirectUrl;
    } 

  }, [fetchData]);

  return [ getRedirectUrl ];
};
