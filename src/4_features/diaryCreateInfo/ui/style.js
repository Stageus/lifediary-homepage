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
`;

const textContent = styled.div`
  width: 600px;
  height: 300px;
  border: ${({ theme }) => `3px solid ${theme.major}`};
  border-radius: 10px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const S = {
  DiaryCreateContainer,
  ContentContainer,
  textContent,
  BtnContainer,
};
