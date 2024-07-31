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

export const S = {
  DatePickerRangeContainer,
  DatePickerContainer,
  horizontalLine,
  DatePickerName,
  BtnContainer,
};
