import styled from "styled-components";

const search = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  border-radius: 8px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.major};
  padding: 0 10px;
  
`;

const tagArea = styled.div`
    display: flex;
    flex: 1;
    overflow-x: scroll;
    width: 300px;
`;

const tagList = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  max-width: 400px;
  overflow-y: scroll;

  &::-webkit-scrollbar{
    display: none;
  }
`;

const tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  gap: 3px;
  margin: 0 5px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.highlight};
  color: ${({ theme }) => theme.white};
  padding: 4px 5px;
  border-radius: 6px;
`;

const tagInput = styled.div`
  flex: 1;
  font-size: 14px;
  display: flex;

  & > input {
    background-color: transparent;
    flex: 1;
    padding: 0;
    border: none;
    outline: none;
  }

  & > span {
    color: ${({ theme }) => theme.gray};
  }
`;

const iconArea = styled.div`
  display: flex;

  & > svg {
    cursor: pointer;
  }
`;

export const S = {
  search,
  tagArea,
  tagList,
  tag,
  tagInput,
  iconArea,
};
