import { useState } from "react";

import { S } from "./style.js";

export const ProfileTab = () => {
  const [selectedTab, setSelectedTab] = useState("myDiaryTab");

  const handleTabBtnClick = (e) => {
    setSelectedTab(e);
  };

  return (
    <>
      <S.ProfileTabContainer>
        <S.TabBtnContainer onClick={() => handleTabBtnClick("myDiaryTab")}>{selectedTab === "myDiaryTab" ? <S.ActiveTabBtn>내 일기</S.ActiveTabBtn> : <S.DefaultTabBtn>내 일기</S.DefaultTabBtn>}</S.TabBtnContainer>
        <S.TabBtnContainer onClick={() => handleTabBtnClick("likeDiaryTab")}>{selectedTab === "likeDiaryTab" ? <S.ActiveTabBtn>좋아요 표시한 일기</S.ActiveTabBtn> : <S.DefaultTabBtn>좋아요 표시한 일기</S.DefaultTabBtn>}</S.TabBtnContainer>
      </S.ProfileTabContainer>
    </>
  );
};
