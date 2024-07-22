import styled from "styled-components";

const ProfileInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const NicknameAndSubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 99px;
`;

const ProfileImgUploadBtn = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
  border-radius: 99px;
`;

const NicknameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
`;

const ProfileEditContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const ProfileTextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-start;
`;

const ProfileInfoMessage = styled.p`
  color: ${({ theme }) => theme.highlight};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

const Nickname = styled.p`
  font-size: ${({ theme }) => theme.fontSize.x_large};
`;

const EditIconContainer = styled.div`
  cursor: pointer;
`;

const SubscribeInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

const ResignBtnContainer = styled.div`
  max-width: 100px;
`;

export const S = {
  ProfileInfoContainer,
  ProfileImg,
  ProfileImgUploadBtn,
  NicknameAndSubscribeContainer,
  NicknameContainer,
  ProfileEditContainer,
  ProfileTextInputContainer,
  ProfileInfoMessage,
  Nickname,
  EditIconContainer,
  SubscribeInfo,
  ResignBtnContainer,
};
