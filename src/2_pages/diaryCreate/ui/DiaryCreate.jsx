import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { S } from "./style";
import { usePostDiaryInfo } from "../api/usePostDiaryInfo";
import { DefaultBtn, TagInput } from "@shared/ui";
import { CreateImg } from "@features/createImg";
import { CreateGrass } from "@features/createGrass";
import { CreatePublic } from "@features/createPublic";

export const DiaryCreate = () => {
  const [imgContents, setImgContents] = useState([]);
  const [textContent, setTextContent] = useState("");
  const [tags, setTags] = useState([]);
  const [isPublic, setIsPublic] = useState(false);
  const [color, setColor] = useState("");
  const [diaryData, status, baseFetch] = usePostDiaryInfo();
  const navigate = useNavigate();

  const checkTextLength = (e) => {
    const inputText = e.target.value;
    if (inputText.length < 500) {
      setTextContent(inputText);
    } else {
      alert("입력 가능한 최대 글자수는 500자입니다.");
      setTextContent(inputText.substr(0, 500)); // substr() 메서드는 문자열에서 특정 위치에서 시작하여 특정 문자 수만큼의 문자들을 반환
    }
  };

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
          <S.TextContent onChange={checkTextLength} maxLength="500" />
        </S.ContentContainer>
        <CreateImg onImgContentsChange={setImgContents} />
        <S.ContentContainer>
          <S.ContentNameContainer>태그</S.ContentNameContainer>
          <TagInput placeholder="입력 후 엔터를 누르면 태그가 자동으로 입력됩니다 (최대 3개)" onTagsChange={setTags} />
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
