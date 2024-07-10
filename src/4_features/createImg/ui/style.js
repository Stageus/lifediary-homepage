import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

const ContentNameContainer = styled.p`
  white-space: nowrap;
  display: flex;
  width: 80px;
`;

const ImgPreviewContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ImgWithCancelIcon = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 10px;
`;

const CancelIconContainer = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 1;
  cursor: pointer;
`;

const ImgPreview = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  object-position: center;
`;

export const S = {
  ContentContainer,
  ContentNameContainer,
  ImgPreviewContainer,
  ImgWithCancelIcon,
  CancelIconContainer,
  ImgPreview,
};
