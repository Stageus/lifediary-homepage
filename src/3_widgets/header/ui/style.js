import styled from "styled-components";

import logo from "@shared/assets/imges/logo.png";

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding: 20px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.major};
`;

const Logo = styled.img.attrs({
  src: logo,
  alt: "logo",
})`
  width: 80px;
  border-radius: 10px;
  cursor: pointer;
`;

const BtnContainer = styled.div`
  box-shadow: 1px 1px 3px gray;
  border-radius: 4px;
`;

export const S = {
  HeaderContainer,
  Logo,
  BtnContainer,
};
