import styled from "styled-components";

const ProfileTabContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: ${({ theme }) => `1px solid ${theme.highlight}`};
`;

const TabBtnContainer = styled.div`
  margin-left: 20px;
`;

export const S = {
  ProfileTabContainer,
  TabBtnContainer,
};
