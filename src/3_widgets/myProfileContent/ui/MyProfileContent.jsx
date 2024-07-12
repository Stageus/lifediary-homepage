import { S } from "./style.js";
import { ProfileInfo } from "@features/profileInfo";
import { ProfileTab } from "@features/profileTab";

export const MyProfileContent = () => {
  return (
    <>
      <S.MyProfileContentContainer>
        <ProfileInfo />
        <ProfileTab />
      </S.MyProfileContentContainer>
    </>
  );
};
