import { useState, useRef } from "react";

export const createImg = () => {
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

  return [fileInputRef, selectedFile, handleFileChange, handleButtonClick, removeImgPreview];
};
