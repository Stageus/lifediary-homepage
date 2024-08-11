import { useState } from "react";

import { S } from "./style";

import { SubscribeBtn } from "@features/subscribeBtn";
import DefaultProfile from "@shared/assets/img/profile.png";

export const UserProfileInfo = () => {
  const [profileImg, setProfileImg] = useState(DefaultProfile);
  const [nickname, setNickname] = useState("고양이");

  return (
    <>
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
    </>
  );
};
