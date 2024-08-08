// Npm
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
// Slice
import { useFetch, useCookie, useRoute } from "@shared/hook";
// Layer

export const useGetAccountExist = () => {

  const [ fetchData, baseFetch ] = useFetch();
  const [ searchParams ] = useSearchParams();
  const { signupRoute, homeRoute } = useRoute();
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
        if ( !fetchData.data.isAccountExist ) {
          signupRoute(fetchData.data);
          return;
        }

        cookieSet("token",fetchData.data.token);
        homeRoute();
        break;

      case 500:
        errorRoute(500, "서버에러");
        break;
    }
  }, [fetchData]);
};
