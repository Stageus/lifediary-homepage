import styled from "styled-components";

import googleLogo from "../assets/googleLogo.png";

const GoogleLoginBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 99px;
  border: 1px solid ${({ theme }) => theme.highlight};
  background-color: ${({ theme }) => theme.major};
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.highlight};
  cursor: pointer;
  white-space: nowrap;
  &::after {
    content: "구글 계정으로 로그인";
  }
`;

const GoogleLogo = styled.img.attrs({
  src: googleLogo,
  alt: "googleLogo",
})`
  width: 20px;
  height: 20px;
`;

export const S = {
  GoogleLoginBtn,
  GoogleLogo,
};
