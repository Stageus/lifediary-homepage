// Npm
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
// Layer
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { convertImageUrl } from "@shared/util";
import { useMessage } from "@shared/store";

export const useGetAccountExist = () => {

  const [ fetchData, baseFetch ] = useFetch();
  const { cookieSet } = useCookie();
  const { signupRoute, homeRoute, errorRoute } = useRoute();
  const setMessage = useMessage( state => state.setMessage ); 
  
  const [ searchParams ] = useSearchParams();
  const codeInfo = searchParams.get("code");

  useEffect(()=>{

    if ( codeInfo ) {
      baseFetch(`account/login/oauth/google/redirect?code=${codeInfo}`);
    }

  },[searchParams]);

  useEffect(() => {
    if ( !fetchData ) return;

    switch ( fetchData.status ) {
      case 200:
        ( async () => {
          try{
            // 응답데이터의 계정유/무
            const isAccountExist =  fetchData.data.isAccountExist;

            // 계정이 없다면: false
            if ( !isAccountExist ) {

              // 구글에서 받은 imgUrl을 file객체로 변환
              const convert = await convertImageUrl(fetchData.data.googleProfileImg);
              // 회원가입페이지서 google정보를 포함하고 변환된 파일객체를 포함하여 이동
              signupRoute({...fetchData.data, googleProfileImg: convert,})
              return;
            }
            
            // 계정이 있다면: true
            cookieSet("token",fetchData.data.token);
            homeRoute();
          }catch ( error ){
            setMessage("google 프로필이미지를 가져오지 못했습니다.");
          }
        })();
        break;
       
      case 500:
        errorRoute(500, "서버오류로 인해 Google 로그인을 할수 없습니다.");
        break;
    }
  }, [fetchData]);
};
