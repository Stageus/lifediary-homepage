import styled from "styled-components";

const login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const innerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  border: 3px solid ${({ theme }) => theme.major};
  border-radius: 10px;
  padding: 120px 80px;
  max-width: 480px;
  box-shadow: 1px 0 10px gray;
`;

const logoArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 200px;
  padding: 8px;
  font-size: 50px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: ${({theme}) => theme.major};
`;

const googleLogin = styled.div`
  display: flex;
  width: 160px;
  justify-content: space-between;
  box-shadow: 1px 1px 3px gray;
  border-radius: 8px;
  border-width: 2px;
  border-color: ${({theme}) => theme.major};
  border-style: solid;
  padding: 4px;
  cursor: pointer;
  
  & > button {
    border: none;
    cursor: pointer;
    white-space: nowrap;
    background-color: transparent;
  }

  & > img {
    width: 30px;
  }
`;

export const S = {
  login,
  innerBox,
  logoArea,
  googleLogin

};
