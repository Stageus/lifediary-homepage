import { useState, useRef } from "react";

import { S } from "./style";
import { DefaultBtn } from "@shared/ui";

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

  return (
    <>
      <S.ContentContainer>
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
      </S.ContentContainer>
    </>
  );
};
