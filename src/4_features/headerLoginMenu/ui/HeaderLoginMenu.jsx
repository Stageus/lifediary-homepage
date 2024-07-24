import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { S } from "./style";
import DefaultProfile from "@shared/assets/imges/profile.png";
import { DefaultBtn } from "@shared/ui";
import { useLogout } from "../lib/useLogout";
import { useGetProfileImage } from "../api/useGetProfileImg";

export const HeaderLoginMenu = () => {
  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState(DefaultProfile);
  const myProfileImg = useGetProfileImage();
  const logout = useLogout();

  useEffect(() => {
    if (myProfileImg) {
      setProfileImg(myProfileImg);
    }
  }, [myProfileImg]);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <S.MenuContainer>
        {profileImg && <S.ProfileImg src={profileImg} onClick={() => navigate("/myprofile")} />}
        <S.BtnContainer>
          <DefaultBtn text="일기업로드" onClick={() => navigate("/diarycreate")} />
        </S.BtnContainer>
        <S.BtnContainer>
          <DefaultBtn text="알림" />
        </S.BtnContainer>
        <S.BtnContainer>
          <DefaultBtn text="로그아웃" onClick={handleLogout} />
        </S.BtnContainer>
      </S.MenuContainer>
    </>
  );
};
