import styled from "styled-components";

const TagInputContainer = styled.div`
  display: flex;
  height: 40px;
  min-width: 600px;
  padding: 8px 16px;
  border-radius: 10px;
  background-color: white;
  border: 3px solid ${({ theme }) => theme.major};
  overflow: hidden;
`;

const TagList = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin: 0px;
  margin-right: 16px;
  background-color: white;
  font-size: ${({ theme }) => theme.fontSize.base};
  cursor: pointer;
`;

const TagInput = styled.input`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.base};
  background-color: white;
  border: none;
`;

export const S = {
  TagInputContainer,
  TagList,
  TagInput,
};
