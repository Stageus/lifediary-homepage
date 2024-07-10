import { useRef, useState } from "react";

import { S } from "./style";
import { DefaultBtn, TagInput, Icon } from "@shared/ui";

export const DiaryCreateInfo = () => {
  const [selectedFile, setSelectedFile] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length + selectedFile.length <= 3) {
      setSelectedFile([...selectedFile, ...files]);
    } else {
      alert("최대 3개의 파일만 업로드할 수 있습니다.");
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <S.DiaryCreateContainer>
        <S.ContentContainer>
          <S.ContentNameContainer>내용</S.ContentNameContainer>
          <S.textContent />
        </S.ContentContainer>
        <S.ImgContentContainer>
          <S.ContentNameContainer>이미지</S.ContentNameContainer>
          <div>
            <DefaultBtn text="선택(최대 3개)" onClick={handleButtonClick} />
            <input type="file" hidden multiple onChange={handleFileChange} ref={fileInputRef} />
          </div>
          <div style={{ display: "flex" }}>
            {selectedFile.map((file, index) => (
              <img key={index} src={URL.createObjectURL(file)} alt={`preview ${index}`} style={{ width: "150px", height: "150px", marginRight: "10px" }} />
            ))}
          </div>
        </S.ImgContentContainer>
        <S.ContentContainer>
          <S.ContentNameContainer>태그</S.ContentNameContainer>
          <TagInput placeholder="#태그 입력(최대 3개)" />
        </S.ContentContainer>
        <S.ContentContainer>
          <S.ContentNameContainer>잔디(필수)</S.ContentNameContainer>
          <div>
            <DefaultBtn text="선택" />
          </div>
          <div>
            <DefaultBtn text="랜덤배정" />
          </div>
        </S.ContentContainer>
        <S.ContentContainer>
          <S.ContentNameContainer>공개</S.ContentNameContainer>
          <Icon type="calendar" />
        </S.ContentContainer>
        <S.BtnContainer>
          <div>
            <DefaultBtn text="작성" type="disabled" />
          </div>
          <div>
            <DefaultBtn text="취소" />
          </div>
        </S.BtnContainer>
      </S.DiaryCreateContainer>
    </>
  );
};
