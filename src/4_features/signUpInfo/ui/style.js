import styled from "styled-components";

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

const SignUpInfoNicknameContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

const SignUpInfoNicknameLabel = styled.label`
  ${({ theme }) => `
  display: flex;
  align-items: center;
  height: 40px;
  white-space: nowrap;
  color: ${theme.highlight};
  font-size: ${theme.fontSize.base};
  `}
`;

const SignUpInfoMessage = styled.p`
  ${({ theme }) => `
  color: ${theme.highlight};
  font-size: ${theme.fontSize.medium};
  `}
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
  SignUpInfoContainer,
  SignUpInfoProfileImgContainer,
  SignUpInfoNicknameContainer,
  SignUpInfoNicknameLabel,
  SignUpInfoMessage,
  SignUpInfoNicknameInputContainer,
  SignUpInfoBtnContainer,
};
