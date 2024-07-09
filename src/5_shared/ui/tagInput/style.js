import styled from "styled-components";

const TagBox = styled.div`
  ${({ theme, px }) => `
    width: 100%;
    max-width: 600px;
    display: flex;
    padding: 0px ${px || "8px"}; 
    border-radius: 10px;
    background-color: ${theme.white};
    border: 3px solid ${theme.major};
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
    white-space: nowrap;
    font-size: ${theme.fontSize.base};
    color: ${theme.black};
  `}
`;

const TagListDeleteBtn = styled.button`
  ${({ theme }) => `
    margin: 0 8px 0 8px;
    white-space: nowrap;
    background-color: ${theme.white};
    color: ${theme.black};
    border: none;
  `}
`;

const TagInputBox = styled.input`
  ${({ theme, px, fontSize }) => `
    width: 100%;
    height: 40px;
    padding: 8px ${px || "8px"} ;
    font-size: ${fontSize || theme.fontSize.base};
    color: ${theme.black};
    background-color: ${theme.white};
    border: 3px solid ${theme.white};
    &:focus {
      outline: none;
    }
  `}
`;

export const S = {
  TagBox,
  TagList,
  TagListBox,
  TagListName,
  TagListDeleteBtn,
  TagInputBox,
};
