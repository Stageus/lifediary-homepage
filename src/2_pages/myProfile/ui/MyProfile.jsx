import { useState } from "react";

import { S } from "./style.js";
import { MyDiaryList } from "./myDiaryList";
import { LikeDiaryList } from "./likeDiaryList";
import { ProfileInfo } from "./profileInfo";

import { DatePeriodPicker } from "@widgets/datePeriodPicker";

export const MyProfile = () => {
  const [selectedTab, setSelectedTab] = useState("myDiaryTab");

  return (
    <>
      <S.MyProfileContentContainer>
        <ProfileInfo />
        <S.ProfileTabContainer>
          <S.TabBtnContainer onClick={() => setSelectedTab("myDiaryTab")}>{selectedTab === "myDiaryTab" ? <S.ActiveTabBtn>내 일기</S.ActiveTabBtn> : <S.DefaultTabBtn>내 일기</S.DefaultTabBtn>}</S.TabBtnContainer>
          <S.TabBtnContainer onClick={() => setSelectedTab("likeDiaryTab")}>{selectedTab === "likeDiaryTab" ? <S.ActiveTabBtn>좋아요 표시한 일기</S.ActiveTabBtn> : <S.DefaultTabBtn>좋아요 표시한 일기</S.DefaultTabBtn>}</S.TabBtnContainer>
        </S.ProfileTabContainer>
        {selectedTab === "myDiaryTab" && (
          <>
            <DatePeriodPicker />
            <MyDiaryList />
          </>
        )}
        {selectedTab === "likeDiaryTab" && <LikeDiaryList />}
      </S.MyProfileContentContainer>
    </>
  );
};
