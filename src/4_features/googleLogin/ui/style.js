import styled from "styled-components";

import googleLogo from "@pages/login/assets/googleLogo.png";

const GoogleLogo = styled.img.attrs({
  src: googleLogo,
  alt: "Google 로고",
})`
  width: 20px;
  height: 20px;
`;

const LoginBtn = styled.button`
  ${({ theme }) => `
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 99px;
  border: 1px solid ${theme.highlight};
  background-color: ${theme.major};
  font-size: ${theme.fontSize.base};
  color: ${theme.highlight};
  cursor: pointer;
  white-space: nowrap;
  &::after {
    content: "구글 계정으로 로그인";
  }

  @media (max-width: 375px) {
    &::after {
      content: "로그인";
    }
  }
  `}
`;

export const S = {
  LoginBtn,
  GoogleLogo,
};
