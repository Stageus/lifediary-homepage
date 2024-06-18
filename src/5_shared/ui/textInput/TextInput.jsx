import { STextInput } from "./style";

export const TextInput = (props) => {
  return (
    <>
      <STextInput type="text" placeholder={props.placeholder} $variant={props.variant} />
    </>
  );
};
