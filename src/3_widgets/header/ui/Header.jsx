import { useState, useEffect } from "react";

import { S } from "./style";
import { TagInput } from "@shared/ui/tagInput/TagInput";
import DefaultProfile from "@shared/assets/imges/profile.png";
import { DefaultBtn, Icon } from "@shared/ui";
import { navigatePage } from "../lib/navigatePage";
import { useGetProfileImage } from "../api/useGetProfileImg";
import { useLogout } from "../lib/useLogout";
import { News } from "@features/news";

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

  const searchByTag = () => {
    console.log("searchByTag");
  };

  return (
    <>
      <S.HeaderContainer>
        <S.Logo onClick={navigateHome} />
        <S.TagInputContainer>
          <TagInput placeholder="검색태그를 입력해 주세요" />
          <S.SearchIcon onClick={searchByTag} />
        </S.TagInputContainer>
        <S.RightElemContainer>
          {profileImg && <S.ProfileImg src={profileImg} onClick={navigateMyProfile} />}
          <S.BtnContainer>
            <DefaultBtn text="일기업로드" onClick={navigateDiaryCreate} />
          </S.BtnContainer>
          <News/>
          <S.BtnContainer>
            <DefaultBtn text="로그아웃" onClick={logout} />
          </S.BtnContainer>
        </S.RightElemContainer>
      </S.HeaderContainer>
    </>
  );
};
