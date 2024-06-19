import { useState } from "react";

import { S } from "./style";

export const TagInput = (props) => {
  const { width, height, px, py, fontSize, placeholder, variant } = props; //props에서 필요한 값을 구조분해해서 할당, 입력필드를 스타일링
  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);

  const onKeyUpEnter = (e) => {
    if (e.key === "Enter" && e.target.value.length > 0) {
      submitTag();
    }
  };

  const submitTag = () => {
    let updatedTagList = [...tagList];
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem("");
    console.log(updatedTagList);
  };

  const deleteTag = (e) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = tagList.filter((tagItem) => tagItem !== deleteTagItem);
    setTagList(filteredTagList);
    console.log(filteredTagList);
  };

  return (
    <S.TagBox>
      <div style={{ display: "flex" }}>
        {tagList.map((tagItem, index) => {
          return (
            <div style={{ display: "flex" }} key={index}>
              <p>{tagItem}</p>
              <button onClick={deleteTag}>삭제</button>
            </div>
          );
        })}
      </div>
      <S.TagInput type="text" width={width} height={height} px={px} py={py} fontSize={fontSize} placeholder={placeholder} $variant={variant} onChange={(e) => setTagItem(e.target.value)} value={tagItem} onKeyUp={onKeyUpEnter} />
    </S.TagBox>
  );
};
