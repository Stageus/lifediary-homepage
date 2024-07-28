import styled from "styled-components";

const DiaryCreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px;
  gap: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

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

const TextContent = styled.textarea`
  width: 600px;
  height: 300px;
  border: ${({ theme }) => `3px solid ${theme.major}`};
  border-radius: 10px;
  padding: 20px;
  font-size: ${({ theme }) => theme.fontSize.base};
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

const NameHighlight = styled.span`
  color: ${({ theme }) => theme.highlight};
`;

const ColorPreview = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ color }) => color};
  margin-right: 10px;
`;

const ToggleBtnContainer = styled.div`
  cursor: pointer;
`;

const ToggleBtn = styled.div`
  display: flex;
  align-items: center;
  width: 58px;
  height: 30px;
  background-color: ${({ $isToggled, theme }) => ($isToggled ? theme.highlight : theme.gray)};
  transition: background-color 0.5s;
  border: ${({ $isToggled, theme }) => `3px solid ${$isToggled ? theme.highlight : theme.gray}`};
  border-radius: 99px;
`;

const ToggleSlider = styled.span`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 99px;
  transition: transform 0.2s;
  transform: ${({ $isToggled }) => ($isToggled ? "translateX(calc(58px - 30px))" : "translateX(0%)")};
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 80px;
`;

export const S = {
  DiaryCreateContainer,
  ContentContainer,
  ImgContentContainer,
  ContentNameContainer,
  TextContent,
  NameAndBtnContainer,
  ImgPreviewContainer,
  ImgWithCancelIcon,
  CancelIconContainer,
  ImgPreview,
  NameHighlight,
  ColorPreview,
  BtnContainer,
  ToggleBtnContainer,
  ToggleBtn,
  ToggleSlider,
};
