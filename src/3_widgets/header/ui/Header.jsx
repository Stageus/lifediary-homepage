import { useState, useEffect } from "react";

import { S } from "./style";
import { TagInput } from "@shared/ui/tagInput/TagInput";
import Profile from "@shared/assets/imges/profile.png";
import { DefaultBtn } from "@shared/ui/defaultBtn/DefaultBtn";
import { navigatePage } from "../lib/navigatePage";

export const Header = () => {
  const [profileImg, setProfileImg] = useState(Profile);
  const [navigateMyProfile, navigateDiaryCreate, navigateHome] = navigatePage();

  return (
    <>
      <S.HeaderContainer>
        <S.Logo onClick={navigateHome} />
        <TagInput />
        <S.RightElemContainer>
          {profileImg && <S.ProfileImg src={profileImg} onClick={navigateMyProfile} />}
          <DefaultBtn text="일기업로드" onClick={navigateDiaryCreate} />
          <DefaultBtn text="알림" />
          <DefaultBtn text="로그아웃" />
        </S.RightElemContainer>
      </S.HeaderContainer>
    </>
  );
};
