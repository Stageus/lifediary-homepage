import { S } from "./style";
import { useCreateGrass } from "../lib/useCreateGrass";

import { DefaultBtn } from "@shared/ui";
import { ChromePicker } from "react-color";

export const CreateGrass = () => {
  const [pickerRef, color, showPicker, handleShowPicker, handleColorChange, handleRandomColor] = useCreateGrass();

  return (
    <>
      <S.ImgContentContainer>
        <S.NameAndBtnContainer>
          <S.ContentNameContainer>
            잔디<S.NameHighlight>(필수)</S.NameHighlight>
          </S.ContentNameContainer>
          {color && <S.ColorPreview color={color} />}
          <div>
            <DefaultBtn text="랜덤배정" onClick={handleRandomColor} />
          </div>
        </S.NameAndBtnContainer>
        <div ref={pickerRef}>
          {showPicker ? (
            <ChromePicker color={color} onChange={handleColorChange} />
          ) : (
            <div>
              <DefaultBtn text="선택" onClick={handleShowPicker} />
            </div>
          )}
        </div>
      </S.ImgContentContainer>
    </>
  );
};
