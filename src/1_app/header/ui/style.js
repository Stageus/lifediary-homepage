import styled from "styled-components";

const Header = styled.div`
  min-width: 1080px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  box-shadow: 0px 0px 3px gray;
`;

const logoArea = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 200px;
  padding: 8px;

  & > img {
    width: 80px;
    border-radius: 10px;
  }
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
