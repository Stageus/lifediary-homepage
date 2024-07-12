import { useState } from "react";
import { S } from "./style.js";
import DefaultProfile from "@shared/assets/imges/profile.png";
import { Icon } from "@shared/ui";

export const ProfileInfo = () => {
  const [profileImg, setProfileImg] = useState(DefaultProfile);

  return (
    <>
      <S.ProfileInfoContainer>
        {profileImg && <S.ProfileImg src={profileImg} />}
        <S.NicknameAndSubscribeContainer>
          <S.NicknameContainer>
            <S.Nickname>고양이</S.Nickname>
            <div>
              <Icon type="edit" />
            </div>
          </S.NicknameContainer>
          <S.SubscribeInfo>구독자 100명, 작성 일기 100개</S.SubscribeInfo>
        </S.NicknameAndSubscribeContainer>
      </S.ProfileInfoContainer>
    </>
  );
};
