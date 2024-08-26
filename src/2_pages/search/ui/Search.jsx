// Slice
import { S } from "./style";
import { useGetSearchList } from "../api/useGetSearchList";
// Layer
import { Thumbnail, Profile, Icon } from "@shared/ui";
import { useScroll } from "@shared/hook";
import { parseTime } from "@shared/util";

export const Search = () => {

  const [ getSearchList, diaryList, isLoading ] = useGetSearchList();
  const [ watchRef ] = useScroll( getSearchList );

  return (
    <S.search>
      { diaryList.length !== 0 ? diaryList.map((diary, idx) => {
        return (
          <S.diary key={idx}>
            <S.headerArea>
              <S.accountImgWrap>
                <Profile src={diary.profileImg} />
              </S.accountImgWrap>

              <S.accountName>{diary.nickname}</S.accountName>

              <S.createAt>{parseTime(diary.createdAt)}</S.createAt>
            </S.headerArea>

            <S.mainArea>
              <S.diaryImgWrap>
                <Thumbnail src={diary.thumbnailImg} />
              </S.diaryImgWrap>

              <S.contentWrap $isContent={diary.textContent}>
                {diary.textContent ?? "작성된내용이 없습니다 ㅠ ^ ㅠ"}
              </S.contentWrap>
            </S.mainArea>

            <S.footerArea>
              <S.likeWrap>
                <span>
                  <Icon size="20px" type="like" />
                </span>
                <span>{`${diary.likeCnt}회`}</span>
              </S.likeWrap>
              <S.tagWrap>
                {diary.tags?.map((tag, idx) => {
                  return <span key={idx}>{`#${tag}`}</span>;
                })}
              </S.tagWrap>
            </S.footerArea>
          </S.diary>
        );
      }) : <S.errorArea> { `등록된 일기가 존재하지 않습니다 ❌` }</S.errorArea>}
      
      { !isLoading && <div ref={ watchRef }>워칭</div>}
      { isLoading ? <div>로딩중...</div> : null}
      
    </S.search>
  );
};
