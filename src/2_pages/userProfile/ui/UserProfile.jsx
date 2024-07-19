import { useState } from "react";

import { S } from "./style.js";
import { ProfileInfo } from "@features/profileInfo";
import { UserDiaryList } from "@features/userDiaryList";

export const UserProfile = () => {
  const [selectedTab, setSelectedTab] = useState("myDiaryTab");

  const handleTabBtnClick = (e) => {
    setSelectedTab(e);
  };

  return (
    <>
      <S.MyProfileContentContainer>
        <ProfileInfo />
        <S.ProfileTabContainer>
          <S.TabBtnContainer onClick={() => handleTabBtnClick("myDiaryTab")}>{selectedTab === "myDiaryTab" ? <S.ActiveTabBtn>유저 일기</S.ActiveTabBtn> : <S.DefaultTabBtn>유저 일기</S.DefaultTabBtn>}</S.TabBtnContainer>
        </S.ProfileTabContainer>
        {selectedTab === "myDiaryTab" ? <UserDiaryList /> : null}
      </S.MyProfileContentContainer>
    </>
  );
};
