import { S } from "./style";

export const TextInput = (props) => {
  return (
    <>
      {/* variant prop이 DOM요소로 전달되어, 콘솔 오류를 유발할 수 있어 앞에$를 붙임, 이렇게 하면 prop을 스타일링에만 사용가능 */}
      <S.TextInput type="text" placeholder={props.placeholder} $variant={props.variant} />
    </>
  );
};
