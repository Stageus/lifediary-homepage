import { S } from "./style.js";
import { ProfileInfo } from "@features/profileInfo";
import { ProfileTab } from "@features/profileTab";
import { DateRangePicker } from "@features/dateRangePicker";

export const MyProfileContent = () => {
  return (
    <>
      <S.MyProfileContentContainer>
        <ProfileInfo />
        <ProfileTab />
        <DateRangePicker />
      </S.MyProfileContentContainer>
    </>
  );
};
