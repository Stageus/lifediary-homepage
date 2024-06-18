import styled from "styled-components";

export default {
  textInput: styled.input`
    ${({ $variant, theme }) =>
      $variant === "select" &&
      `
    background-color: ${theme.major};
    border: 1px solid ${theme.white};
  `}
    ${({ $variant, theme }) =>
      $variant === "disabled" &&
      `
    background-color: ${theme.gray};
    border: 1px solid ${theme.white};
  `}
  ${({ $variant, theme }) =>
      $variant === "default" &&
      `
    background-color: ${theme.highlight};
    border: 1px solid ${theme.white};
  `}
  `,
};
