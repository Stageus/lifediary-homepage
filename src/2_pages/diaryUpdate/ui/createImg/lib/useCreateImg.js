import { useState, useRef } from "react";

export const useCreateImg = () => {
  const [selectedFile, setSelectedFile] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = e.target.files;

    const allowedExtensions = ["jpg", "jpeg", "gif", "png"];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const extension = file.name.split(".").pop().toLowerCase();
      if (!allowedExtensions.includes(extension)) {
        alert("jpg, jpeg, gif, png 파일만 선택 가능합니다.");
        return;
      }
    }

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
