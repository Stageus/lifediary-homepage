import styled from "styled-components";

import logo from "@shared/assets/imges/logo.png";
import searchIcon from "../assets/searchIcon.png";

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
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

const TagInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchIcon = styled.img.attrs({
  src: searchIcon,
  alt: "searchIcon",
})`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
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

const BtnContainer = styled.div`
  white-space: nowrap;
`;

export const S = {
  HeaderContainer,
  Logo,
  TagInputContainer,
  SearchIcon,
  ProfileImg,
  RightElemContainer,
  BtnContainer,
};
