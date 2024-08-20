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
  menuArea,
  profileArea,
};
