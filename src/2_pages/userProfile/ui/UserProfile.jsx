import { useState } from "react";

import { S } from "./style.js";
import { UserDiaryList } from "./userDiaryList";
import { DatePeriodPicker } from "./datePeriodPicker";
import { ProfileInfo } from "./profileInfo";

export const UserProfile = () => {
  const [selectedTab, setSelectedTab] = useState("userDiaryTab");

  const handleTabBtnClick = (e) => {
    setSelectedTab(e);
  };

  return (
    <>
      <S.MyProfileContentContainer>
        <ProfileInfo />
        <S.ProfileTabContainer>
          <S.TabBtnContainer onClick={() => handleTabBtnClick("userDiaryTab")}>{selectedTab === "userDiaryTab" ? <S.ActiveTabBtn>유저 일기</S.ActiveTabBtn> : <S.DefaultTabBtn>유저 일기</S.DefaultTabBtn>}</S.TabBtnContainer>
        </S.ProfileTabContainer>
        {selectedTab === "userDiaryTab" && (
          <>
            <DatePeriodPicker />
            <UserDiaryList />
          </>
        )}
      </S.MyProfileContentContainer>
    </>
  );
};
