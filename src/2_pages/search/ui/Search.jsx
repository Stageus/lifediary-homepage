// Slice
import { S } from "./style";
import { useGetSearchList } from "../api/useGetSearchList";
// Layer
import { Thumbnail, Profile, Icon } from "@shared/ui";

export const Search = () => {

  const [diaryList, errorMessage] = useGetSearchList();

  return (
    <S.search>
      {diaryList ? diaryList.map((diary) => {
        return (
          <S.diary key={diary.idx}>
            <S.headerArea>
              <S.accountImgWrap>
                <Profile src={diary.profileImg} />
              </S.accountImgWrap>

              <S.accountName>{diary.nickname}</S.accountName>

              <S.createAt>{diary.createdAt}</S.createAt>
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
      }): <div>{ errorMessage }</div>}
    </S.search>
  );
};
