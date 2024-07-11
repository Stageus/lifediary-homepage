import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ContentNameContainer = styled.p`
  white-space: nowrap;
  display: flex;
  width: 80px;
`;

const ToggleBtnContainer = styled.div`
  cursor: pointer;
`;

const ToggleBtn = styled.div`
  display: flex;
  align-items: center;
  width: 58px;
  height: 30px;
  background-color: ${({ isToggled, theme }) => (isToggled ? theme.highlight : theme.gray)};
  transition: background-color 0.5s;
  border: ${({ isToggled, theme }) => `3px solid ${isToggled ? theme.highlight : theme.gray}`};
  border-radius: 99px;
`;

const ToggleSlider = styled.span`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 99px;
  transition: transform 0.2s;
  transform: ${({ isToggled }) => (isToggled ? "translateX(calc(58px - 30px))" : "translateX(0%)")};
`;

export const S = {
  ContentContainer,
  ContentNameContainer,
  ToggleBtnContainer,
  ToggleBtn,
  ToggleSlider,
};
