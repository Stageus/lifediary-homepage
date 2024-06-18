import styled from "styled-components";

const TextInput = styled.input`
  ${({ theme, width, px, py, fontSize, borderWidth }) => `
    width: ${width || "100%"};
    height: 40px;
    border-radius: 10px;
    padding: ${px || "8px"} ${py || "16px"};
    font-size: ${fontSize || theme.fontSize.base};
    color: ${theme.black};
    background-color: ${theme.white};
    border: ${borderWidth || "3px"} solid ${theme.major};
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
