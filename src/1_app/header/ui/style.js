import styled from "styled-components";

const Header = styled.div`
  min-width: 1080px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  box-shadow: 0px 0px 10px #8080805e;
  background-color: transparent;
`;

const logoArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 200px;
  padding: 8px;
  font-size: 30px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: ${({theme}) => theme.major};
`;
const searchArea = styled.div`
  flex: 1;
  max-width: 700px;
  display: flex;
  align-items: center;
`;

const menuArea = styled.div`
  gap: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

const profileArea = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
`;

export const S = {
  Header,
  logoArea,
  searchArea,
  menuArea,
  profileArea,
};
