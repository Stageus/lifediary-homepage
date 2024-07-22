import styled from "styled-components";

import logo from "@shared/assets/imges/logo.png";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  border: 3px solid ${({ theme }) => theme.major};
  border-radius: 10px;
  padding: 120px 80px;
  min-width: 500px;
  max-width: 600px;
`;

const Logo = styled.img.attrs({
  src: logo,
  alt: "logo",
})`
  width: 160px;
  border-radius: 10px;
  cursor: pointer;
`;

const SignUpInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
`;

const SignUpInfoProfileImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const SignUPInfoProfileImg = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
  border-radius: 99px;
`;

const SignUpInfoNicknameContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

const SignUpInfoNicknameLabel = styled.label`
  display: flex;
  align-items: center;
  height: 40px;
  white-space: nowrap;
  color: ${({ theme }) => theme.highlight};
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const SignUpInfoMessage = styled.p`
  color: ${({ theme }) => theme.highlight};
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

const SignUpInfoNicknameInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  width: 100%;
`;

const SignUpInfoBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const S = {
  PageContainer,
  ProfileContainer,
  Logo,
  SignUpInfoContainer,
  SignUpInfoProfileImgContainer,
  SignUPInfoProfileImg,
  SignUpInfoNicknameContainer,
  SignUpInfoNicknameLabel,
  SignUpInfoMessage,
  SignUpInfoNicknameInputContainer,
  SignUpInfoBtnContainer,
};
