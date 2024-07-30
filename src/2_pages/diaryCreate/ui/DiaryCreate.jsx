import { useNavigate } from "react-router-dom";

import { S } from "./style";
import { CreateText } from "./createText";
import { CreateImg } from "./createImg";
import { CreateTag } from "./createTag";
import { CreatePublic } from "./createPublic";
import { useCreateGrass } from "../lib/useCreateGrass";

import { DefaultBtn } from "@shared/ui";
import { ChromePicker } from "react-color";

export const DiaryCreate = () => {
  const navigate = useNavigate();
  const [pickerRef, color, showPicker, handleShowPicker, handleColorChange, handleRandomColor] = useCreateGrass();

  const handleSubmit = () => {
    if (color === "") {
      alert("잔디 색상을 선택해주세요.");
    } else {
      postDiaryInfo();
    }
  };

  return (
    <>
      <S.DiaryCreateContainer>
        <CreateText />
        <CreateImg />
        <CreateTag />
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
        <CreatePublic />
        <S.BtnContainer>
          <div>
            <DefaultBtn text="작성" type={color === "" ? "disabled" : ""} onClick={handleSubmit} />
          </div>
          <div>
            <DefaultBtn text="취소" onClick={() => navigate(-1)} />
          </div>
        </S.BtnContainer>
      </S.DiaryCreateContainer>
      ;
    </>
  );
};
