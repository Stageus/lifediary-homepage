import styled from "styled-components";

const MyProfileContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  margin: 80px;
`;

const ProfileImgUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const ProfileInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const ProfileImgUploadLabel = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.highlight};
  cursor: pointer;
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
  ProfileImgUploadContainer,
  ProfileInfoContainer,
  ProfileImgUploadLabel,
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
  ProfileTabContainer,
  TabBtnContainer,
  ActiveTabBtn,
  DefaultTabBtn,
};
