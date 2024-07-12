import styled from "styled-components";

const TagInputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  max-width: 500px;
  padding: 8px 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.white};
  border: ${({ theme }) => `3px solid ${theme.major}`};
  overflow: hidden;
`;

const TagList = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin: 0px;
  margin-right: 16px;
  background-color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSize.base};
  cursor: pointer;
`;

const TagInput = styled.input`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.base};
  background-color: ${({ theme }) => theme.white};
  border: none;
`;

export const S = {
  TagInputContainer,
  TagList,
  TagInput,
};
