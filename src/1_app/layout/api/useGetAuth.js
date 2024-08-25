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
    // cookie 목록중 token이 있을경우에만 실행한다.
    if ( cookieGet("token") ) getAuth();
  }, [ cookieGet("token") ]);

  useEffect(() => {
    if (!fetchData) return;

    switch ( fetchData.status ) {
      case 200:
        const mapperData = mapper(fetchData.data);
        // cookie에 권한, 접속중인 유저의 이미지를 포함한 이유는?
        // 권한은 신고페이지에 대한 접근권한때문에 저장
        // 프로필이미지는 댓글에 답글달경우에, ux적으로 이용하기 위해
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
