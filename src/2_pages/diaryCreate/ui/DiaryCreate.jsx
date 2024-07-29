import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { S } from "./style";
import { createImg } from "../lib/createImg";
import { createGrass } from "../lib/createGrass";
import { createPublic } from "../lib/createPublic";
import { useCheckTextLength } from "../lib/useCheckTextLength";

import { DefaultBtn, Icon } from "@shared/ui";
import { TagInput } from "@widgets/tagInput";
import { ChromePicker } from "react-color";

export const DiaryCreate = () => {
  const navigate = useNavigate();
  const [checkTextLength] = useCheckTextLength(500);
  const [fileInputRef, selectedFile, handleFileChange, handleButtonClick, removeImgPreview] = createImg();
  const [pickerRef, color, showPicker, handleShowPicker, handleColorChange, handleRandomColor] = createGrass();
  const [isPublic, toggle] = createPublic();

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
        <S.ContentContainer>
          <S.ContentNameContainer>내용</S.ContentNameContainer>
          <S.TextContent onChange={checkTextLength} placeholder="내용을 입력해주세요(최대 500자)" />
        </S.ContentContainer>
        <S.ImgContentContainer>
          <S.NameAndBtnContainer>
            <S.ContentNameContainer>이미지</S.ContentNameContainer>
            <div>
              <DefaultBtn text="선택(최대 3개)" onClick={handleButtonClick} />
              <input type="file" hidden multiple onChange={handleFileChange} ref={fileInputRef} />
            </div>
          </S.NameAndBtnContainer>
          <S.ImgPreviewContainer>
            {selectedFile.map((file, index) => (
              <S.ImgWithCancelIcon key={index}>
                <S.CancelIconContainer onClick={() => removeImgPreview(index)}>
                  <Icon type="cancel" color="red" />
                </S.CancelIconContainer>
                <S.ImgPreview src={URL.createObjectURL(file)} alt={`preview ${index}`} />
              </S.ImgWithCancelIcon>
            ))}
          </S.ImgPreviewContainer>
        </S.ImgContentContainer>
        <S.ContentContainer>
          <S.ContentNameContainer>태그</S.ContentNameContainer>
          <TagInput placeholder="입력 후 엔터를 누르면 태그 자동 입력 (최대 3개)" />
        </S.ContentContainer>
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
        <S.ContentContainer>
          <S.ContentNameContainer>공개</S.ContentNameContainer>
          <S.ToggleBtnContainer onClick={toggle}>
            <S.ToggleBtn $isToggled={isPublic}>
              <S.ToggleSlider $isToggled={isPublic} />
            </S.ToggleBtn>
          </S.ToggleBtnContainer>
        </S.ContentContainer>
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
