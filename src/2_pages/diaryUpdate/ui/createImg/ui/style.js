import styled from "styled-components";

const ImgContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

const ContentNameContainer = styled.p`
  white-space: nowrap;
  display: flex;
  width: 80px;
`;

const NameAndBtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
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
  ImgContentContainer,
  ContentNameContainer,
  NameAndBtnContainer,
  ImgPreviewContainer,
  ImgWithCancelIcon,
  CancelIconContainer,
  ImgPreview,
};
