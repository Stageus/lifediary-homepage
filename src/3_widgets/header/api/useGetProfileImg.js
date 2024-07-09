import { useState, useEffect } from "react";

import { useFetch } from "@shared/hook/useFetch";
import { useCookie } from "@shared/hook/useCookie";

export const useGetProfileImage = () => {
  const [myProfileImg, setMyProfileImg] = useState(null);
  const [profileImgData, errorStatus, baseFetch] = useFetch();
  const { handleGetCookie } = useCookie();

  useEffect(() => {
    baseFetch("account", {}, handleGetCookie());
    setMyProfileImg(profileImgData);

    if (errorStatus) {
      console.log("Error: ", errorStatus);
    }
  }, [baseFetch]);

  //임시데이터로 테스트하는 코드
  // useEffect(() => {
  //   setMyProfileImg("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg");

  //   if (errorStatus) {
  //     console.log("Error: ", errorStatus);
  //   }
  // }, []);

  return myProfileImg;
};
