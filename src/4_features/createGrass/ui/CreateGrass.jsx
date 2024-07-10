import { ChromePicker } from "react-color";

import { S } from "./style";
import { DefaultBtn } from "@shared/ui";

export const CreateGrass = () => {
  const [color, setColor] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const handleColorChange = (color) => {
    setColor(color.hex);
  };

  const handleRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  };

  return (
    <>
      <S.ContentContainer>
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
              <DefaultBtn text="선택" onClick={() => setShowPicker(true)} />
            </div>
          )}
        </div>
      </S.ContentContainer>
    </>
  );
};
