import styled from "styled-components";

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 99px;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const BtnContainer = styled.div`
  white-space: nowrap;
`;

export const S = {
  ProfileImg,
  MenuContainer,
  BtnContainer,
};
