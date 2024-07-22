import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { S } from "./style";
import { usePostDiaryInfo } from "../api/usePostDiaryInfo";
import { useCheckTextLength } from "../lib/useCheckTextLength";

import { DefaultBtn, TagInput } from "@shared/ui";
import { CreateImg } from "@features/createImg";
import { CreateGrass } from "@features/createGrass";
import { CreatePublic } from "@features/createPublic";

export const DiaryCreate = () => {
  const [imgContents, setImgContents] = useState([]);
  const [tags, setTags] = useState([]);
  const [isPublic, setIsPublic] = useState(false);
  const [color, setColor] = useState("");
  const [diaryData, status, baseFetch] = usePostDiaryInfo();
  const navigate = useNavigate();
  const [checkTextLength, textContent, setTextContent] = useCheckTextLength(500);

  const handleSubmit = () => {
    if (color === "") {
      alert("잔디 색상을 선택해주세요.");
    } else {
      baseFetch(imgContents, textContent, tags, isPublic, color);
    }
  };

  return (
    <>
      <S.DiaryCreateContainer>
        <S.ContentContainer>
          <S.ContentNameContainer>내용</S.ContentNameContainer>
          <S.TextContent onChange={checkTextLength} />
        </S.ContentContainer>
        <CreateImg onImgContentsChange={setImgContents} />
        <S.ContentContainer>
          <S.ContentNameContainer>태그</S.ContentNameContainer>
          <TagInput placeholder="입력 후 엔터를 누르면 태그 자동 입력 (최대 3개)" onTagsChange={setTags} />
        </S.ContentContainer>
        <CreateGrass onColorSelected={setColor} />
        <CreatePublic onIsPublicChange={setIsPublic} />
        <S.BtnContainer>
          <div>
            <DefaultBtn text="작성" type={color === "" ? "disabled" : ""} onClick={handleSubmit} />
          </div>
          <div>
            <DefaultBtn text="취소" onClick={() => navigate(-1)} />
          </div>
        </S.BtnContainer>
      </S.DiaryCreateContainer>
    </>
  );
};
