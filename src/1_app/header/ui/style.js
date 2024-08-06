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
`;

const search = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  border: 1px solid ${({ theme }) => theme.major};
  background-color: white;
  border-radius: 8px;

& > input {
    background-color: transparent;
    flex: 1;
    border: none;
    outline: none;
  };

`;

const menuArea = styled.div`
  gap: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 350px;
`;

const profileArea = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const S = {
  Header,
  logoArea,
  searchArea,
  search,
  menuArea,
  profileArea,
};
