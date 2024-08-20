import styled from "styled-components";

const Layout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const header = styled.div`
  height: 80px;
  background-color: ${({ theme }) => theme.major};
`;

const divideArea = styled.div`
  display: flex;
  flex-grow: 1;
`;

const aside = styled.div`
  min-width: 200px;
`;

const main = styled.div`
  flex-grow: 1;
`;

export const S = {
  Layout,
  header,
  divideArea,
  aside,
  main,
};
