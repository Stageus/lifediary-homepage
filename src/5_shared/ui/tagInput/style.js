import styled from "styled-components";

const TagInput = styled.input`
  ${({ theme }) => `
    height: 40px;
    padding: 8px 16px;
    border-radius: 10px;
    font-size: ${theme.fontSize.base};
    color: ${theme.black};
    background-color: ${theme.white};
    border: 3px solid ${theme.major};
  `}
`;

export const S = {
  TagInput,
};
