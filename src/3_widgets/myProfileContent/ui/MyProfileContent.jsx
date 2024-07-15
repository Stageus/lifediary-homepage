import { useState } from "react";

import { S } from "./style.js";
import { ProfileInfo } from "@features/profileInfo";
import { ProfileTab } from "@features/profileTab";
import { DateRangePicker } from "@features/dateRangePicker";
import { DiaryCard } from "@features/diaryCard";

export const MyProfileContent = () => {
  const [selectedTab, setSelectedTab] = useState("myDiaryTab");

  return (
    <>
      <S.MyProfileContentContainer>
        <ProfileInfo />
        <ProfileTab onTabSelect={setSelectedTab} />
        {selectedTab === "myDiaryTab" ? (
          <>
            <DateRangePicker />
            <S.DiscardArrayContainer>
              <DiaryCard />
            </S.DiscardArrayContainer>
          </>
        ) : (
          <DiaryCard />
        )}
      </S.MyProfileContentContainer>
    </>
  );
};
