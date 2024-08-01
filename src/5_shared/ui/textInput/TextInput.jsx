import { S } from "./style";

export const TextInput = (props) => {
  const { type, placeholder, onBlur } = props; //props에서 필요한 값을 구조분해해서 할당, 입력필드를 스타일링

  return (
    <>
      <S.TextInput type={type} placeholder={placeholder} onBlur={onBlur} />
    </>
  );
};
