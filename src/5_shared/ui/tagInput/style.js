import styled from "styled-components";

const TagInputBox = styled.input`
  ${({ theme, px, py, fontSize }) => `
    width: 100%;
    height: 40px;
    padding: ${px || "8px"} ${py || "8px"};
    font-size: ${fontSize || theme.fontSize.base};
    color: ${theme.black};
    background-color: ${theme.white};
    border: 3px solid ${theme.white};
  `}
`;

const TagList = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    margin: 8px;
    color: ${theme.black};
    border: 1px solid ${theme.white};
  `}
`;

const TagListBox = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    background-color: ${theme.white};
    cursor: pointer;
  `}
`;

const TagListName = styled.p`
  ${({ theme }) => `
    padding: 0 8px;
    white-space: nowrap;
    font-size: ${theme.fontSize.base};
    color: ${theme.black};
  `}
`;

const TagListDeleteBtn = styled.button`
  ${({ theme }) => `
    padding: 0 8px;
    white-space: nowrap;
    background-color: ${theme.white};
    color: ${theme.black};
    border: none;
  `}
`;

const TagBox = styled.div`
  ${({ theme, px }) => `
    display: flex;
    padding: 0px ${px || "8px"}; 
    border-radius: 10px;
    background-color: ${theme.white};
    border: 3px solid ${theme.major};
  `}
`;

export const S = {
  TagInputBox,
  TagList,
  TagListBox,
  TagListName,
  TagListDeleteBtn,
  TagBox,
};
