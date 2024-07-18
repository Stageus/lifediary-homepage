import { useState } from "react";

import { S } from "./style.js";
import { ProfileInfo } from "@features/profileInfo";
import { ProfileTab } from "@features/profileTab";
import { MyDiaryList } from "@features/myDiaryList";

export const MyProfile = () => {
  const [selectedTab, setSelectedTab] = useState("myDiaryTab");

  return (
    <>
      <S.MyProfileContentContainer>
        <ProfileInfo />
        <ProfileTab onTabSelect={setSelectedTab} />
        {selectedTab === "myDiaryTab" ? <MyDiaryList /> : null}
      </S.MyProfileContentContainer>
    </>
  );
};
