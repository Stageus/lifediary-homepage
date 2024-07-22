import styled from "styled-components";

const ProfileTabContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: ${({ theme }) => `1px solid ${theme.highlight}`};
`;

const TabBtnContainer = styled.div`
  margin-left: 20px;
`;

const ActiveTabBtn = styled.div`
  color: ${({ theme }) => theme.major};
  background-color: ${({ theme }) => theme.highlight};
  font-size: ${({ theme }) => theme.fontSize.large};
  border: ${({ theme }) => `1px solid ${theme.highlight}`};
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  padding: 8px 16px;
  cursor: pointer;
`;

const DefaultTabBtn = styled.div`
  color: ${({ theme }) => theme.highlight};
  background-color: ${({ theme }) => theme.major};
  font-size: ${({ theme }) => theme.fontSize.large};
  border: ${({ theme }) => `1px solid ${theme.highlight}`};
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  padding: 8px 16px;
  cursor: pointer;
`;

export const S = {
  ProfileTabContainer,
  TabBtnContainer,
  ActiveTabBtn,
  DefaultTabBtn,
};
