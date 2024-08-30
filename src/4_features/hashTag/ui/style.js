import styled from "styled-components";

const hashTag = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

const tagList = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: ${({$scroll}) => $scroll ? "nowrap" : "wrap"};

  &::-webkit-scrollbar{
    display: none;
  }
`;

const tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  gap: 5px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.major};
  padding: 4px 5px;
  border-radius: 6px;

  & > p {
    color: white;
  }

  & > span{
    display: inline-block; 
    font-size: 14px;
    color: ${({ theme }) => theme.gray};
  }
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

export const S = {
    hashTag,
    tagList,
    tag,
    tagInput
};