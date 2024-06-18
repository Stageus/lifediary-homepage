import { useState } from "react";

import { S } from "./style";

export const TagInput = (props) => {
  const [value, setValue] = useState("");
  const onKeyUpEnter = (e) => {
    if (e.key === "Enter" && !value.startsWith("#")) {
      setValue("#" + e.target.value);
    }
  };
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const onKeyDownEnter = (e) => {
    if (e.key === "Enter" && value.startsWith("#")) {
      setValue(value + "#");
    }
  };

  return (
    <>
      <S.TagInput type="text" placeholder={props.placeholder} onKeyUp={onKeyUpEnter} onKeyDown={onKeyDownEnter} onChange={onChangeHandler} value={value} />
    </>
  );
};
