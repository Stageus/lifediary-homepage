import styled from "styled-components";

const diaryItem = styled.div`
  flex: 0 1 200px;
  border: 3px solid ${({ theme }) => theme.minor};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    transform: scale(1.05);
    border-color: ${({ theme }) => theme.highlight};
  }
`;

const thumbnailWrap = styled.div`
  height: 200px;
`;

const diaryInfoWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 4px;
  align-items: center;
  font-size: 14px;
`;

const guideMessage = styled.p`
  grid-column: 1/4;
  text-align: center;
`;


export const S = {
    diaryItem,
    thumbnailWrap,
    diaryInfoWrap,
    guideMessage,
};