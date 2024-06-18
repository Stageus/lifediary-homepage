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
  position: fixed;
  width: 100%;
  height: 80px;
  grid-area: header;
  outline: 1px solid black;
`;
const main = styled.div`
  grid-area: main;
`;

export const S = {
    headerLayout,
    header,
    main
};
