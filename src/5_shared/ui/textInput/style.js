import styled from "styled-components";

const TextInput = styled.input`
  ${({ theme }) => `
    height: 40px;
    padding: 8px 16px;
    border-radius: 10px;
    font-size: ${theme.fontSize.base};
    color: ${theme.black};
    `}

  ${({ $variant, theme }) =>
    $variant === "default" &&
    `
      background-color: ${theme.white};
      border: 3px solid ${theme.major};
    `}

    ${({ $variant, theme }) =>
    $variant === "error" &&
    `
      background-color: ${theme.white};
      border: 3px solid ${theme.highlight};
    `}
`;

export const S = {
  TextInput,
};
