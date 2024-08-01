import styled from "styled-components";

const DatePickerRangeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DatePickerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 16px;
  border: ${({ theme }) => `3px solid ${theme.major}`};
  border-radius: 10px;
`;

const horizontalLine = styled.hr`
  border: 1px solid ${({ theme }) => theme.major};
  margin: 0 12px;
  width: 20px;
`;

const DatePickerName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.gray};
`;

const BtnContainer = styled.div`
  margin-left: 24px;
`;

const DiaryCardContainer = styled.div`
  max-width: 1080px;
  flex-wrap: wrap;
  display: flex;
  gap: 12px;
`;

const DiaryCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
`;

const ThumbnailContainer = styled.div`
  position: relative;
  width: 200px;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  width: 200px;
  height: 50px;
  border: ${({ theme }) => `3px solid ${theme.major}`};
  border-radius: 0 0 10px 10px;
`;

const NameHighlight = styled.span`
  color: ${({ theme }) => theme.highlight};
`;

export const S = {
  DatePickerRangeContainer,
  DatePickerContainer,
  horizontalLine,
  DatePickerName,
  BtnContainer,
  DiaryCardContainer,
  DiaryCard,
  ThumbnailContainer,
  DateContainer,
  NameHighlight,
};
