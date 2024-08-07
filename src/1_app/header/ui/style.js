import styled from "styled-components";

const Header = styled.div`
  min-width: 1080px;
  max-width: 1080px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;  
  margin: 0 auto;
`;

const logoArea = styled.div`
  display: flex;
  cursor: pointer;
  width: 80px;
  padding: 4px;

  & > img {
    width: 100%;
    border-radius: 10px;
  }
`;
const searchArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  border-radius: 8px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.major};
  padding: 0 10px;

  & > svg {
    cursor: pointer;
  };
`;

const tagList = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  margin: 0 5px;

  & > input {
    width: fit-content;
    border: none;
    outline: none;
  }


`;

const search = styled.div`
  flex: 1;
  font-size: 14px;

& > input {
    background-color: transparent;
    flex: 1;
    padding: 0;
    border: none;
    outline: none;
  };

  & > span {
    color: ${({theme}) => theme.gray};
  }
`;

const menuArea = styled.div`
  gap: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 350px;
`;

const profileArea = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const S = {
  Header,
  logoArea,
  searchArea,
  tagList,
  tag,
  search,
  menuArea,
  profileArea,
};
