import styled from "styled-components";

const userInfoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border: 2px solid ${({ theme }) => theme.major};
  border-radius: 75px 20px 20px 75px;
  height: 150px;
  min-width: 600px;
  padding: 1px;

`;

const imgWrap = styled.div`
  position: relative;
  display: flex;

  & > label {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    cursor: pointer;
  }

  & > input {
    display: none;
  }
`;

const profileWrap = styled.div`
  width: 144px;
  height: 144px;
  display: flex;
  border-radius: 50%;
  overflow: hidden;
  & > img {
    cursor: ${({ $isMyprifle }) => ($isMyprifle ? "pointer" : "auto")};
  }
`;

const imgBtnWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  gap: 8px;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(130%);
`;

const infoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const userInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const iconWrap = styled.div`
  cursor: pointer;
`;

const name = styled.span`
  text-align: center;
`;

const pageInfo = styled.div`
  font-size: 14px;
  color: gray;
`;

const btnWrap = styled.div`
  width: 100px;
`;

export const S = {
  userInfoArea,
  profileWrap,
  imgWrap,
  imgBtnWrap,
  infoWrap,
  userInfo,
  name,
  iconWrap,
  pageInfo,
  btnWrap,
};
