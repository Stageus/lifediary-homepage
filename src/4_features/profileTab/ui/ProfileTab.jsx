import { S } from "./style.js";
import { DefaultBtn } from "@shared/ui";

export const ProfileTab = () => {
  return (
    <>
      <S.ProfileTabContainer>
        <S.TabBtnContainer>
          <DefaultBtn text="내 일기" />
        </S.TabBtnContainer>
        <S.TabBtnContainer>
          <DefaultBtn text="좋아요 표시한 일기" />
        </S.TabBtnContainer>
      </S.ProfileTabContainer>
    </>
  );
};
