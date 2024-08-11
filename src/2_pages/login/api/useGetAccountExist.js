// Npm
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
// Slice
import { convertImageUrl } from "../lib/convertImageUrl"
// Layer
import { useFetch, useCookie, useRoute } from "@shared/hook";

export const useGetAccountExist = () => {

  const [ fetchData, baseFetch ] = useFetch();
  const [ searchParams ] = useSearchParams();
  const { signupRoute, homeRoute, errorRoute } = useRoute();
  const { cookieSet } = useCookie();

  useEffect(()=>{

    if ( searchParams.get("code") ){
      baseFetch(`account/login/oauth/google/redirect?code=${searchParams.get("code")}`);
    }

  },[searchParams]);

  useEffect(() => {
    if ( !fetchData ) return;

    switch ( fetchData.status ) {
      case 200:
        ( async () => {
          try{
            if ( !fetchData.data.isAccountExist && fetchData.data.googleProfileImg ){
              const convert = await convertImageUrl(fetchData.data.googleProfileImg);
              signupRoute({
                ...fetchData.data,
                googleProfileImg: convert,
              })
              return;
            }
            
            cookieSet("token",fetchData.data.token);
            homeRoute();
          }catch ( error ){
            console.error("파일변환 에러");
          }
        })();
        break;
       
      case 500:
        errorRoute(500, "서버에러");
        break;
    }
  }, [fetchData]);
};
