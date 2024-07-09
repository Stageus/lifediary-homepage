import React from "react";

import { S } from "./style";
import { useGetSearchContent } from "../api/useGetSearchContent";

export const SearchContent = () => {
  const searchData = useGetSearchContent();

  if (!searchData || searchData.length === 0) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <S.SearchContents>
        {searchData.map((item) => (
          <S.SearchContentContainer key={item.idx}>
            <S.ContentInfoContainer>
              <S.UserInfoContainer>
                <S.ProfileImg src={item.profileImg} />
                <p>{item.nickname}</p>
              </S.UserInfoContainer>
              <S.DiaryInfoContainer>
                <p>{item.createdAt}</p>
                <p>{`좋아요 ${item.likeCnt}개`}</p>
                <p>{item.tags.map((tag) => "#" + tag)}</p>
              </S.DiaryInfoContainer>
            </S.ContentInfoContainer>
            <S.ThumbnailImgContainer>
              <S.ThumbnailImg src={item.thumbnailImg} />
            </S.ThumbnailImgContainer>
            <S.TextContentContainer>
              <p>{item.textContent}</p>
            </S.TextContentContainer>
          </S.SearchContentContainer>
        ))}
      </S.SearchContents>
    </>
  );
};
