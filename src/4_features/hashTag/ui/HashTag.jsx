import { S } from "./style";
import { useTag } from "../model/useTag";

export const HashTag = (props) => {
    
    const { scroll } = props; 
    const { tagList, inputRef, onKeyUp, onBlur, deleteTag } = useTag(props);

  return (
    <S.hashTag>
      <S.tagList $scroll={scroll}>
        {tagList &&
          tagList?.map((text, idx) => {
            return (
              <S.tag onClick={() => deleteTag(text)} key={idx}>
                <span>{"#"}</span>
                <p>{`${text}`}</p>
                <span>{"✖️"}</span>
              </S.tag>
            );
          })}
        <S.tagInput>
          <span>#</span>
          <input
            type="text"
            ref={inputRef}
            onKeyUp={onKeyUp}
            onBlur={onBlur}
            placeholder="태그입력"
          />
        </S.tagInput>
      </S.tagList>
    </S.hashTag>
  );
};
