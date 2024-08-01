import styled from "styled-components";

const TextInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding: 8px 16px;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.black};
  background-color: white;
  border: 3px solid ${({ theme }) => theme.major};

  ${({ type, theme }) =>
    type === "error" &&
    `
      background-color: white;
      border: 3px solid ${theme.highlight};
    `}
`;

export const S = {
  TextInput,
};
