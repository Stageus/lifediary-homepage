import { useState } from "react";

import { S } from "./style";
import { TagInput } from "@shared/ui/tagInput/TagInput";
import Profile from "@shared/assets/imges/profile.png";
import { DefaultBtn } from "@shared/ui/defaultBtn/DefaultBtn";

export const Header = () => {
  const [profileImg, setProfileImg] = useState(Profile);

  return (
    <>
      <S.HeaderContainer>
        <S.Logo />
        <TagInput />
        <S.RightElemContainer>
          {profileImg && <S.ProfileImg src={profileImg} />}
          <DefaultBtn text="일기업로드" />
          <DefaultBtn text="알림" />
          <DefaultBtn text="로그아웃" />
        </S.RightElemContainer>
      </S.HeaderContainer>
    </>
  );
};
