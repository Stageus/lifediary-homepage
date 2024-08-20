// Npm
import { useState } from "react";
// Slice
import { S } from "./style";
// Layer
import { Icon } from "@shared/ui";
import { useRoute } from "@shared/hook";
import { HashTag } from "@features/hashTag";

export const Search = () => {

  const { searchRoute } = useRoute();
  const [ tagList, setTagList ] = useState([]);
  
  return (
    <S.search>
      <S.tagArea>
        <HashTag tagList={tagList} setTagList={setTagList} scroll={true}/>
      </S.tagArea>
      <S.iconArea onClick={() => searchRoute(tagList)}>
        <Icon size="28px" color="#FFE6DE" type="search"/>
      </S.iconArea>
    </S.search>
  );
};
