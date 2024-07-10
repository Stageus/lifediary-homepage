import { useState, useRef } from "react";

import { S } from "./style";
import { DefaultBtn, Icon } from "@shared/ui";

export const CreateImg = () => {
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

  const removeImgPreview = (index) => {
    setSelectedFile(selectedFile.filter((_, i) => i !== index));
  };

  return (
    <>
      <S.ContentContainer>
        <S.ContentNameContainer>이미지</S.ContentNameContainer>
        <div>
          <DefaultBtn text="선택(최대 3개)" onClick={handleButtonClick} />
          <input type="file" hidden multiple onChange={handleFileChange} ref={fileInputRef} />
        </div>
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
      </S.ContentContainer>
    </>
  );
};
