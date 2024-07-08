import styled from "styled-components";

import logo from "@shared/assets/imges/logo.png";

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 20px;
`;

const Logo = styled.img.attrs({
  src: logo,
  alt: "logo",
})`
  width: 80px;
  border-radius: 10px;
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 99px;
`;

const RightElemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const S = {
  HeaderContainer,
  Logo,
  ProfileImg,
  RightElemContainer,
};
