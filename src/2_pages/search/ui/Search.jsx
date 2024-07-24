import { useNavigate } from "react-router-dom";

import { S } from "./style";
import { useGetSearchContent } from "../api/useGetSearchContent";

export const Search = () => {
  const navigate = useNavigate();
  const searchData = useGetSearchContent();

  return (
    <>
      <S.SearchContents>
        {searchData.map((item) => (
          <S.SearchContentContainer key={item.idx}>
            <S.ContentInfoContainer>
              <S.UserInfoContainer onClick={() => navigate("/myProfile")}>
                <S.ProfileImg src={item.profileImg} />
                <p>{item.nickname}</p>
              </S.UserInfoContainer>
              <S.DiaryInfoContainer>
                <p>{item.createdAt}</p>
                <p>{`좋아요 ${item.likeCnt}개`}</p>
                <p>{item.tags.map((tag) => "#" + tag)}</p>
              </S.DiaryInfoContainer>
            </S.ContentInfoContainer>
            <S.ThumbnailImgContainer onClick={() => navigate("/diary")}>
              <S.ThumbnailImg src={item.thumbnailImg} />
            </S.ThumbnailImgContainer>
            <S.TextContentContainer onClick={() => navigate("/diary")}>
              <p>{item.textContent}</p>
            </S.TextContentContainer>
          </S.SearchContentContainer>
        ))}
      </S.SearchContents>
    </>
  );
};
