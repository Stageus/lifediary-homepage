import styled from "styled-components";

import searchIcon from "../assets/searchIcon.png";

const TagInputContainer = styled.div`
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

export const S = {
  TagInputContainer,
  SearchIcon,
};
