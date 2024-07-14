import { S } from "./style.js";
import { ProfileInfo } from "@features/profileInfo";
import { ProfileTab } from "@features/profileTab";
import { DateRangePicker } from "@features/dateRangePicker";
import { DiaryCard } from "@features/diaryCard";

export const MyProfileContent = () => {
  return (
    <>
      <S.MyProfileContentContainer>
        <ProfileInfo />
        <ProfileTab />
        <DateRangePicker />
        <S.DiscardArrayContainer>
          <DiaryCard />
        </S.DiscardArrayContainer>
      </S.MyProfileContentContainer>
    </>
  );
};
