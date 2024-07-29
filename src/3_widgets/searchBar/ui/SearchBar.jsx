import { useState } from "react";

import { S } from "./style";
import { useGetSearchContent } from "../api/useGetSearchContent";

import { TagInput } from "@features/tagInput";

export const SearchBar = () => {
  const [tags, setTags, getSearchContent] = useGetSearchContent();

  return (
    <>
      <S.TagInputContainer>
        <TagInput placeholder="검색태그를 입력해 주세요" onTagsChange={() => setTags()} />
        <S.SearchIcon onClick={getSearchContent} />
      </S.TagInputContainer>
    </>
  );
};
