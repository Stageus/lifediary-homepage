import styled from "styled-components";

const headerLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 80px;
  grid-template-areas:
    "header header header"
    "main main main"
    "main main main"
    "main main main";
`;

const header = styled.div`
  width: 1080px;
  position: fixed;
  height: 80px;
  grid-area: header;
`;

const main = styled.div`
  grid-area: main;
`;

export const S = {
  headerLayout,
  header,
  main,
};
