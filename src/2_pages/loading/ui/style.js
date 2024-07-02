import styled from "styled-components";

import loading from "@shared/assets/imges/loading.gif";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingImg = styled.img.attrs({
  src: loading,
  alt: "loading",
})`
  width: 160px;
  border-radius: 10px;
`;

export const S = {
  PageContainer,
  LoadingImg,
};
