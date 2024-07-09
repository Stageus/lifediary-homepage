import { useState, useEffect } from "react";

import { S } from "./style";
import { TagInput } from "@shared/ui/tagInput/TagInput";
import DefaultProfile from "@shared/assets/imges/profile.png";
import { DefaultBtn } from "@shared/ui/defaultBtn/DefaultBtn";
import { navigatePage } from "../lib/navigatePage";
import { useGetProfileImage } from "../api/useGetProfileImg";
import { useLogout } from "../lib/useLogout";

export const Header = () => {
  const [profileImg, setProfileImg] = useState(DefaultProfile);
  const [navigateMyProfile, navigateDiaryCreate, navigateHome] = navigatePage();
  const myProfileImg = useGetProfileImage();
  const logout = useLogout;

  useEffect(() => {
    if (myProfileImg) {
      setProfileImg(myProfileImg);
    }
  }, [myProfileImg]);

  return (
    <>
      <S.HeaderContainer>
        <S.Logo onClick={navigateHome} />
        <TagInput />
        <S.RightElemContainer>
          {profileImg && <S.ProfileImg src={profileImg} onClick={navigateMyProfile} />}
          <DefaultBtn text="일기업로드" onClick={navigateDiaryCreate} />
          <DefaultBtn text="알림" />
          <DefaultBtn text="로그아웃" onClick={logout} />
        </S.RightElemContainer>
      </S.HeaderContainer>
    </>
  );
};
