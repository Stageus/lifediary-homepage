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

const textContent = styled.textarea.attrs({
  placeholder: "내용을 입력해주세요(최대 500자)",
})`
  width: 600px;
  height: 300px;
  border: ${({ theme }) => `3px solid ${theme.major}`};
  border-radius: 10px;
  padding: 20px;
  font-size: ${({ theme }) => theme.fontSize.base};
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
  textContent,
  BtnContainer,
};
