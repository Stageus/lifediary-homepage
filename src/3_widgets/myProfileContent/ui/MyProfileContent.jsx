import { S } from "./style.js";
import { ProfileInfo } from "@features/profileInfo";

export const MyProfileContent = () => {
  return (
    <>
      <S.MyProfileContentContainer>
        <ProfileInfo />
      </S.MyProfileContentContainer>
    </>
  );
};
