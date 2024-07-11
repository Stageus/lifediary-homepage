import { useState } from "react";

import { S } from "./style";

export const CreatePublic = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <S.ContentContainer>
        <S.ContentNameContainer>공개</S.ContentNameContainer>
        <S.ToggleBtnContainer onClick={toggle}>
          <S.ToggleBtn isToggled={isToggled}>
            <S.ToggleSlider isToggled={isToggled} />
          </S.ToggleBtn>
        </S.ToggleBtnContainer>
      </S.ContentContainer>
    </>
  );
};
