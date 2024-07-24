import { useState } from "react";

import { S } from "./style";

export const CreatePublic = ({ onIsPublicChange }) => {
  const [isPublic, setIsPublic] = useState(false);

  const toggle = () => {
    setIsPublic(!isPublic);
    onIsPublicChange(!isPublic);
  };

  return (
    <>
      <S.ContentContainer>
        <S.ContentNameContainer>공개</S.ContentNameContainer>
        <S.ToggleBtnContainer onClick={toggle}>
          <S.ToggleBtn $isToggled={isPublic}>
            <S.ToggleSlider $isToggled={isPublic} />
          </S.ToggleBtn>
        </S.ToggleBtnContainer>
      </S.ContentContainer>
    </>
  );
};
