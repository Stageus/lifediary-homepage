// Npm
import { useEffect, useState } from "react";
// Layer
import { useFetch, useCookie, useRoute } from "@shared/hook";

export const useGetAuth = () => {

  const [ fetchData, baseFetch ] = useFetch();
  const [ userInfo, setUserInfo ] = useState( null );
  const { cookieGet, cookieRemove } = useCookie();
  const { errorRoute } = useRoute();

  const mapper = ( resData ) => {
    const permissionType = {
      user: 0,
      admin: 1,
    };

    return {
      accountIdx: resData.accountIdx,
      profileImg: resData.profileImg,
      permission: permissionType[resData.permission],
    };
  };

  const getAuth = () => {
    baseFetch("auth", {}, cookieGet("token"));
  };

  useEffect(() => {
    if ( cookieGet("token") ){
      getAuth();
    }
  }, [ cookieGet("token") ]);

  useEffect(() => {
    if (!fetchData) return;

    switch ( fetchData.status ) {
      case 200:
        setUserInfo( mapper(fetchData.data) );
        break;

      case 401:
        cookieRemove();
        break;

      case 500:
        errorRoute(500, "서버에러");
        break;
    }
  }, [fetchData]);

  return [ userInfo ];
};
