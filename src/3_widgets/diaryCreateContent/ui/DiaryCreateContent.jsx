import { useState } from "react";

import { S } from "./style";
import { usePostDiaryInfo } from "../api/usePostDiaryInfo";
import { DefaultBtn } from "@shared/ui";
import { CreateImg } from "@features/createImg";
import { CreateTag } from "@features/createTag";
import { CreateGrass } from "@features/createGrass";
import { CreatePublic } from "@features/createPublic";

export const DiaryCreateContent = () => {
  const [colorSelected, setColorSelected] = useState(false);
  const [imgContents, setImgContents] = useState([]);
  const [textContent, setTextContent] = useState("");
  const [tags, setTags] = useState([]);
  const [isPublic, setIsPublic] = useState(false);
  const [color, setColor] = useState("");
  const [postDiaryInfo] = usePostDiaryInfo();

  const handleColorSelection = (color) => {
    if (color) {
      setColorSelected(true);
    }
  };

  const handleSubmit = () => {
    postDiaryInfo(imgContents, textContent, tags, isPublic, color);
  };

  const checkTextLength = (e) => {
    const inputText = e.target.value;
    if (inputText.length < 500) {
      setTextContent(inputText);
    } else {
      alert("입력 가능한 최대 글자수는 500자입니다.");
      setTextContent(inputText.substr(0, 500)); // substr() 메서드는 문자열에서 특정 위치에서 시작하여 특정 문자 수만큼의 문자들을 반환
    }
  };

  return (
    <>
      <S.DiaryCreateContainer>
        <S.ContentContainer>
          <S.ContentNameContainer>내용</S.ContentNameContainer>
          <S.TextContent onChange={checkTextLength} maxLength="500" />
        </S.ContentContainer>
        <CreateImg onImgContentsChange={setImgContents} />
        <CreateTag onTagsChange={setTags} />
        <CreateGrass onColorSelected={handleColorSelection} />
        <CreatePublic onIsPublicChange={setIsPublic} />
        <S.BtnContainer>
          <div>
            <DefaultBtn text="작성" type={colorSelected ? "select" : "disabled"} onClick={handleSubmit} />
          </div>
          <div>
            <DefaultBtn text="취소" />
          </div>
        </S.BtnContainer>
      </S.DiaryCreateContainer>
    </>
  );
};
