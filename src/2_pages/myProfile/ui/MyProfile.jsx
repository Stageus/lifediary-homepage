import { useState } from "react";

import { S } from "./style.js";
import { MyDiaryList } from "./myDiaryList";
import { LikeDiaryList } from "./likeDiaryList";
import { MyProfileInfo } from "./myProfileInfo";

export const MyProfile = () => {
  const [selectedTab, setSelectedTab] = useState("myDiaryTab");

  return (
    <>
      <S.MyProfileContentContainer>
        <MyProfileInfo />
        <S.ProfileTabContainer>
          <S.TabBtnContainer onClick={() => setSelectedTab("myDiaryTab")}>{selectedTab === "myDiaryTab" ? <S.ActiveTabBtn>내 일기</S.ActiveTabBtn> : <S.DefaultTabBtn>내 일기</S.DefaultTabBtn>}</S.TabBtnContainer>
          <S.TabBtnContainer onClick={() => setSelectedTab("likeDiaryTab")}>{selectedTab === "likeDiaryTab" ? <S.ActiveTabBtn>좋아요 표시한 일기</S.ActiveTabBtn> : <S.DefaultTabBtn>좋아요 표시한 일기</S.DefaultTabBtn>}</S.TabBtnContainer>
        </S.ProfileTabContainer>
        {selectedTab === "myDiaryTab" && (
          <>
            <MyDiaryList />
          </>
        )}
        {selectedTab === "likeDiaryTab" && <LikeDiaryList />}
      </S.MyProfileContentContainer>
    </>
  );
};
