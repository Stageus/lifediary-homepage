import { useState } from "react";

import { S } from "./style.js";
import { UserDiaryList } from "./userDiaryList";

import { DatePeriodPicker } from "@widgets/datePeriodPicker";
import { SubscribeBtn } from "@features/subscribeBtn";
import DefaultProfile from "@shared/assets/imges/profile.png";

export const UserProfile = () => {
  const [selectedTab, setSelectedTab] = useState("userDiaryTab");
  const [profileImg, setProfileImg] = useState(DefaultProfile);
  const [nickname, setNickname] = useState("고양이");

  return (
    <>
      <S.MyProfileContentContainer>
        <S.ProfileInfoContainer>
          {profileImg && <S.ProfileImg src={profileImg} />}
          <S.NicknameAndSubscribeContainer>
            <S.NicknameContainer>
              <S.Nickname>{nickname}</S.Nickname>
              <SubscribeBtn />
            </S.NicknameContainer>
            <S.SubscribeInfo>구독자 100명, 작성 일기 100개</S.SubscribeInfo>
          </S.NicknameAndSubscribeContainer>
        </S.ProfileInfoContainer>
        <S.ProfileTabContainer>
          <S.TabBtnContainer onClick={() => setSelectedTab("userDiaryTab")}>{selectedTab === "userDiaryTab" ? <S.ActiveTabBtn>유저 일기</S.ActiveTabBtn> : <S.DefaultTabBtn>유저 일기</S.DefaultTabBtn>}</S.TabBtnContainer>
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
