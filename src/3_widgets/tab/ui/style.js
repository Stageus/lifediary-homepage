import styled from "styled-components";

const tabArea = styled.div`
  flex-grow: 1;
`;

const tabHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme }) => theme.major};
`;

const tabBtnWrap = styled.div`
  display: flex;
  gap: 10px;
`;

const tabBtn = styled.button`
  border: none;
  padding: 8px 12px;
  border-radius: 10px 10px 0 0;
  background-color: ${({ $tabNum, theme }) =>
    $tabNum ? theme.highlight : theme.minor};
  color: ${({ $tabNum, theme }) => ($tabNum ? theme.white : theme.highlight)};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.highlight};
    color: white;
  }
`;

const tabDateWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 3px;
`;

const tabContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 5px;
  padding: 20px 0;
`;

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
  tabArea,
  tabHeader,
  tabBtnWrap,
  tabBtn,
  tabDateWrap,
  tabContent,
  diaryItem,
  thumbnailWrap,
  diaryInfoWrap,
  guideMessage,
};
