import { useState } from "react";

import { S } from "./style";

import { TagInput } from "@shared/ui";

export const SearchBar = () => {
  const [tags, setTags] = useState([]);

  return (
    <>
      <S.TagInputContainer>
        <TagInput placeholder="검색태그를 입력해 주세요" onTagsChange={setTags} />
        <S.SearchIcon />
      </S.TagInputContainer>
    </>
  );
};
