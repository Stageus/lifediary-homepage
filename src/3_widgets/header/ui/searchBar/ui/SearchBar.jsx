import { useState } from "react";

import { S } from "./style";
import { useGetSearchContent } from "../api/useGetSearchContent";

import { TagInput } from "@widgets/tagInput";

export const SearchBar = () => {
  const [tags, setTags, getSearchContent] = useGetSearchContent();

  return (
    <>
      <S.TagInputContainer>
        <TagInput placeholder="검색어 입력 후 엔터를 누르면 태그 자동 입력 (최대 20자, 3개 )" />
        <S.SearchIcon onClick={getSearchContent} />
      </S.TagInputContainer>
    </>
  );
};
