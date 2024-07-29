import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ContentNameContainer = styled.p`
  white-space: nowrap;
  display: flex;
  width: 80px;
`;

const TextContent = styled.textarea`
  width: 600px;
  height: 300px;
  border: ${({ theme }) => `3px solid ${theme.major}`};
  border-radius: 10px;
  padding: 20px;
  font-size: ${({ theme }) => theme.fontSize.base};
`;

export const S = {
  ContentContainer,
  ContentNameContainer,
  TextContent,
};
