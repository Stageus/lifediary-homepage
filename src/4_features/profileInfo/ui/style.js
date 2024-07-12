import styled from "styled-components";

const ProfileInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
  border-radius: 99px;
`;

const NicknameAndSubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const NicknameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Nickname = styled.p`
  font-size: ${({ theme }) => theme.fontSize.x_large};
`;

const SubscribeInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const S = {
  ProfileInfoContainer,
  ProfileImg,
  NicknameAndSubscribeContainer,
  NicknameContainer,
  Nickname,
  SubscribeInfo,
};
