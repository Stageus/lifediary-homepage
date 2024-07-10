import styled from "styled-components";

const SearchContents = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px;
`;

const SearchContentContainer = styled.div`
  display: flex;
  padding: 8px;
  gap: 8px;
`;

const ContentInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 120px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const ProfileImgContainer = styled.div`
  width: 50px;
  height: 50px;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 99px;
`;

const DiaryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ThumbnailImgContainer = styled.div`
  width: 300px;
  height: 240px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

const ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextContentContainer = styled.div`
  width: 300px;
  height: 240px;
  padding: 16px;
  border-radius: 10px;
  cursor: pointer;
  border: ${({ theme }) => `3px solid ${theme.major}`};
`;

export const S = {
  SearchContents,
  SearchContentContainer,
  ContentInfoContainer,
  UserInfoContainer,
  ProfileImgContainer,
  ProfileImg,
  DiaryInfoContainer,
  ThumbnailImgContainer,
  ThumbnailImg,
  TextContentContainer,
};
