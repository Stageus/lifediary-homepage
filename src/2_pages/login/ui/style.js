import styled from "styled-components";

import logo from "@shared/assets/imges/logo.png";
<<<<<<< HEAD
import googleLogo from "@pages/login/assets/googleLogo.png";
=======
>>>>>>> 58ba93cd19e5fced6a3eef61be9a0eed38955d54

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginContainer = styled.div`
  ${({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  border: 3px solid ${theme.major};
  border-radius: 10px;
  padding: 120px 80px;
  max-width: 480px;
  `}
`;

const Logo = styled.img.attrs({
  src: logo,
  alt: "logo",
})`
  width: 160px;
  border-radius: 10px;
`;

<<<<<<< HEAD
const GoogleLogo = styled.img.attrs({
  src: googleLogo,
  alt: "Google 로고",
})`
  width: 20px;
  height: 20px;
`;

=======
>>>>>>> 58ba93cd19e5fced6a3eef61be9a0eed38955d54
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
  PageContainer,
  LoginContainer,
  Logo,
<<<<<<< HEAD
  GoogleLogo,
=======
>>>>>>> 58ba93cd19e5fced6a3eef61be9a0eed38955d54
  LoginBtn,
};
