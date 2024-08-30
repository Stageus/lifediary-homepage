// Slice
import { S } from "./style";
import { useGetSearchList } from "../api/useGetSearchList";
// Layer
import { Thumbnail, Profile, Icon } from "@shared/ui";
import { useScroll, useRoute } from "@shared/hook";
import { parseTime } from "@shared/util";
import { useCookie } from "@shared/hook";


export const Search = () => {

  const [ getSearchList, diaryList, isLoading ] = useGetSearchList();
  const [ watchRef ] = useScroll( getSearchList );
  const { userProfileRoute, myProfileRoute } = useRoute();
  const { cookieGet } = useCookie();

  return (
    <S.search>
      { diaryList.length !== 0 ? diaryList.map((diary, idx) => {
        return (
          <S.diary key={idx}>
            <S.headerArea>
              <S.accountImgWrap onClick={()=> cookieGet("accountIdx") === diary.accountIdx ? myProfileRoute() :userProfileRoute(diary.accountIdx)}>
                <Profile img={diary.profileImg} />
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
      
      { diaryList.length >= 10 && !isLoading && <div ref={ watchRef }/>}
      { isLoading ? <div>로딩중...</div> : null}
      
    </S.search>
  );
};
