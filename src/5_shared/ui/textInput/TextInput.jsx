import { S } from "./style";

export const TextInput = (props) => {
  const { width, height, px, py, fontSize, placeholder, variant, onBlur } = props; //props에서 필요한 값을 구조분해해서 할당, 입력필드를 스타일링

  return (
    <>
      <S.TextInput type="text" width={width} height={height} px={px} py={py} fontSize={fontSize} placeholder={placeholder} $variant={variant} onBlur={onBlur} />
    </>
  );
};
