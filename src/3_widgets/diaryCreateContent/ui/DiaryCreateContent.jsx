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

  return (
    <>
      <S.DiaryCreateContainer>
        <S.ContentContainer>
          <S.ContentNameContainer>내용</S.ContentNameContainer>
          <S.textContent onChange={(e) => setTextContent(e.target.value)} />
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
