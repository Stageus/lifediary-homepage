// Slice
import { S } from "./style";
import { useTag } from "../model/useTag";
// Layer
import { Icon } from "@shared/ui";
import { useRoute } from "@shared/hook";

export const Search = () => {

  const { searchRoute } = useRoute();
  const { tag, onKeyUp, onBlur, deleteTag } = useTag();

  return (
    <S.search>
      <S.tagList>
        {tag &&
          tag?.map((text, idx) => {
            return (
              <S.tag onClick={() => deleteTag(text)} key={idx}>
                <span>#</span>
                <span>{text}</span>
                <span>×</span>
              </S.tag>
            );
          })}
      </S.tagList>
      <S.tagInput>
        <span>#</span>
        <input
          type="text"
          onKeyUp={onKeyUp}
          onBlur={onBlur}
          placeholder="태그입력"
        />
      </S.tagInput>
      <S.iconArea onClick={() => searchRoute(encodeURIComponent(tag))}>
        <Icon size="28px" color="#FFE6DE" type="search"/>
      </S.iconArea>
    </S.search>
  );
};
