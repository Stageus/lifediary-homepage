import { S } from "./style";
import { useCreatePublic } from "../lib/useCreatePublic";

export const CreatePublic = () => {
  const [isPublic, toggle] = useCreatePublic();

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
