import { useState, useEffect, useRef } from "react";

export const useCreateGrass = () => {
  const [color, setColor] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef();

  const handleShowPicker = () => {
    setShowPicker(true);
  };

  const handleColorChange = (color) => {
    setColor(color.hex);
  };

  const handleRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  };

  useEffect(() => {
    // 외부 클릭 감지 함수
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowPicker(false);
      }
    };

    // 문서에 클릭 이벤트 리스너 추가
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return [pickerRef, color, showPicker, handleShowPicker, handleColorChange, handleRandomColor];
};
