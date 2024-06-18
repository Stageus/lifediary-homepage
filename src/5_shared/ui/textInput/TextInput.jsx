import { useRef } from "react";
import { S } from "./style";

export const TextInput = (props) => {
  const { width, height, px, py, fontSize, placeholder, borderWidth, variant } = props;
  const textInputRef = useRef(); // 입력 필드에 대한 참조 생성

  const handleBlur = () => {
    console.log(textInputRef.current.value);
  };

  return (
    <>
      <S.TextInput type="text" width={width} height={height} px={px} py={py} fontSize={fontSize} placeholder={placeholder} borderWidth={borderWidth} $variant={variant} ref={textInputRef} onBlur={handleBlur} />
    </>
  );
};
