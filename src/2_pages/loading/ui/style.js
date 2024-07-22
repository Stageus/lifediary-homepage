import styled from "styled-components";

import LoadingIcon from "@shared/assets/imges/loading.gif";

const LoadingContent = styled.div`
  background-image: url(${LoadingIcon});
  background-position: center;
  width: 200px;
  height: 200px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const S = {
  LoadingContent,
};
