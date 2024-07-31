import styled from "styled-components";

const MyProfileContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  margin: 80px;
`;

const ProfileInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 99px;
`;

const NicknameAndSubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NicknameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
`;

const Nickname = styled.p`
  font-size: ${({ theme }) => theme.fontSize.x_large};
`;

const SubscribeInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

const ProfileTabContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: ${({ theme }) => `1px solid ${theme.highlight}`};
`;

const TabBtnContainer = styled.div`
  margin-left: 20px;
`;

const ActiveTabBtn = styled.div`
  color: ${({ theme }) => theme.major};
  background-color: ${({ theme }) => theme.highlight};
  font-size: ${({ theme }) => theme.fontSize.large};
  border: ${({ theme }) => `1px solid ${theme.highlight}`};
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  padding: 8px 16px;
  cursor: pointer;
`;

const DefaultTabBtn = styled.div`
  color: ${({ theme }) => theme.highlight};
  background-color: ${({ theme }) => theme.major};
  font-size: ${({ theme }) => theme.fontSize.large};
  border: ${({ theme }) => `1px solid ${theme.highlight}`};
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  padding: 8px 16px;
  cursor: pointer;
`;

export const S = {
  MyProfileContentContainer,
  ProfileInfoContainer,
  ProfileImg,
  NicknameAndSubscribeContainer,
  NicknameContainer,
  Nickname,
  SubscribeInfo,
  ProfileTabContainer,
  TabBtnContainer,
  ActiveTabBtn,
  DefaultTabBtn,
};
