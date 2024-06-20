import { useState } from "react";

import { S } from "./style";

export const TagInput = (props) => {
  const { px, fontSize, placeholder } = props;
  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);

  const onKeyUpEnter = (e) => {
    if (e.key === "Enter" && e.target.value.length > 0) {
      submitTag();
    }
  };

  const submitTag = () => {
    if (tagList.length < 3) {
      let newTagItem = tagItem.trim().replace(/ /g, "");
      const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
      newTagItem = newTagItem.replace(regExp, "");
      if (newTagItem.length > 0) {
        let updatedTagList = [...tagList];
        updatedTagList.push("#" + newTagItem);
        setTagList(updatedTagList);
        setTagItem("");
      }
    }
  };

  const deleteTag = (e) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = tagList.filter((tagItem) => tagItem !== deleteTagItem);
    setTagList(filteredTagList);
  };

  return (
    <>
      <p>해시태그 인풋</p>
      <S.TagBox px={px}>
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
        <S.TagInputBox type="text" px={px} fontSize={fontSize} placeholder={tagList.length >= 3 ? "" : placeholder} onChange={(e) => setTagItem(e.target.value)} value={tagItem} onKeyUp={onKeyUpEnter} disabled={tagList.length >= 3} />
      </S.TagBox>
    </>
  );
};
