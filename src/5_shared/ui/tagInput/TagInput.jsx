import { useState } from "react";

import { S } from "./style";

export const TagInput = (props) => {
  const { height, px, py, fontSize, placeholder, variant } = props; //props에서 필요한 값을 구조분해해서 할당, 입력필드를 스타일링
  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);

  const onKeyDownSharp = (e) => {
    if (e.key === "#") {
      e.preventDefault();
    }
  };

  const onKeyUpEnter = (e) => {
    if (e.key === "Enter" && e.target.value.length > 0) {
      submitTag();
    }
  };

  const submitTag = () => {
    let updatedTagList = [...tagList];
    updatedTagList.push("#" + tagItem);
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
    <>
      <p>해시태그 인풋</p>
      <S.TagBox px={px} py={py}>
        <S.TagList>
          {tagList.map((tagItem, index) => {
            return (
              <S.TagListBox key={index} onClick={deleteTag}>
                <S.TagListName>{tagItem}</S.TagListName>
                <S.TagListDeleteBtn>X</S.TagListDeleteBtn>
              </S.TagListBox>
            );
          })}
        </S.TagList>
        <S.TagInputBox type="text" height={height} px={px} py={py} fontSize={fontSize} placeholder={placeholder} $variant={variant} onChange={(e) => setTagItem(e.target.value)} value={tagItem} onKeyUp={onKeyUpEnter} onKeyDown={onKeyDownSharp} />
      </S.TagBox>
    </>
  );
};
