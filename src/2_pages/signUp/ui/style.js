import styled from "styled-components";

import logo from "@shared/assets/imges/logo.png";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ProfileContainer = styled.div`
  ${({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  border: 3px solid ${theme.major};
  border-radius: 10px;
  padding: 120px 80px;
  min-width: 500px;
  max-width: 600px;
  `}
`;

const Logo = styled.img.attrs({
  src: logo,
  alt: "logo",
})`
  width: 160px;
  border-radius: 10px;
`;

export const S = {
  PageContainer,
  ProfileContainer,
  Logo,
};
