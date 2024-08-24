// Npm
import { useEffect, useState } from "react";
// Layer
import { useFetch, useCookie } from "@shared/hook";

export const useGetAuth = () => {

  const [ fetchData, baseFetch ] = useFetch();
  const { cookieGet, cookieRemove, cookieSet } = useCookie();

  const [ userInfo, setUserInfo ] = useState( null );

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
    if ( cookieGet("token") ) getAuth();
  }, [ cookieGet("token") ]);

  useEffect(() => {
    if (!fetchData) return;

    switch ( fetchData.status ) {
      case 200:
        const mapperData = mapper(fetchData.data);
        cookieSet("profile",mapperData.profileImg);
        cookieSet("permission",mapperData.permission);
        setUserInfo( mapperData );
        break;

      case 401:
        cookieRemove();
        break;

      case 500:
        cookieRemove();
        break;
    }
  }, [fetchData]);

  return [ userInfo ];
};
