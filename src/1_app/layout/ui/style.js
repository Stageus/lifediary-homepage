import styled from "styled-components";

const Layout = styled.div`
  height: 100%;
`;

const header = styled.div`
  height: 80px;
  background-color: ${({ theme }) => theme.major};
`;

const divideArea = styled.div`
  display: flex;
  height: 100%;
`;

const aside = styled.div`
  width: 200px;
`;

const main = styled.div`
  flex: 1;
  height: 100%;
`;

export const S = {
  Layout,
  header,
  divideArea,
  aside,
  main,
};
