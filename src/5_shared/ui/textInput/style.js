import styled from "styled-components";

const getBackgroundColor = (sort, theme) => {
  if (sort === "default") {
    return theme.minor;
  } else if (sort === "select") {
    return theme.major;
  } else if (sort === "disabled") {
    return theme.gray;
  }
};

const getBorderColor = (sort, theme) => {
  if (sort === "default") {
    return theme.gray;
  } else if (sort === "select") {
    return theme.white;
  } else if (sort === "disabled") {
    return theme.white;
  }
};

export const STextInput = styled.input`
  background-color: ${({ sort, theme }) => getBackgroundColor(sort, theme)};
  border: 1px solid ${({ sort, theme }) => getBorderColor(sort, theme)};
`;
