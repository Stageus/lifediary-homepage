import { useState } from "react";

import { S } from "./style.js";
import { UserDiaryList } from "./userDiaryList";
import { UserProfileInfo } from "./userProfileInfo";

export const UserProfile = () => {
  const [selectedTab, setSelectedTab] = useState("userDiaryTab");

  return (
    <>
      <S.MyProfileContentContainer>
        <UserProfileInfo />
        <S.ProfileTabContainer>
          <S.TabBtnContainer onClick={() => setSelectedTab("userDiaryTab")}>{selectedTab === "userDiaryTab" ? <S.ActiveTabBtn>유저 일기</S.ActiveTabBtn> : <S.DefaultTabBtn>유저 일기</S.DefaultTabBtn>}</S.TabBtnContainer>
        </S.ProfileTabContainer>
        {selectedTab === "userDiaryTab" && (
          <>
            <UserDiaryList />
          </>
        )}
      </S.MyProfileContentContainer>
    </>
  );
};
