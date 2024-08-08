import styled from "styled-components";

const search = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;
  padding: 20px;
  
`;

const diary = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const headerArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const accountImgWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
`;

const accountName = styled.span`
  font-size: 14px;
  color: ${({theme}) => theme.black};
`;

const createAt = styled.div`
  font-size: ${({theme}) => theme.fontSize.medium};
  color: ${({theme}) => theme.gray};
`;

const mainArea = styled.div`
  display: flex;
  gap: 6px;
`;

const diaryImgWrap = styled.div`
  width: 300px;
  height: 240px;
`;

const contentWrap = styled.div`
  width: 300px;
  height: 240px;
  border: 2px solid ${({theme}) => theme.major};
  border-radius: 8px;
  padding: 10px;
  overflow-y: scroll;

  ${({$isContent}) => !$isContent && `
    display: flex;
    justify-content:center;
    align-items: center;
    color: gray;
  `}
`;

const footerArea = styled.div`
  flex: 1;
  display: flex;
  gap: 6px;
`;

const likeWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 200px;
`;

const tagWrap = styled.div`
  max-width: 400px;
  display: flex;
  align-items: center;
  color: #ff9800;
  font-weight: bold;
  font-style: italic;
  gap: 4px;
  flex-wrap: wrap;
`;


export const S = {
  search,
  diary,
  headerArea,
  accountImgWrap,
  accountName,
  createAt,
  mainArea,
  diaryImgWrap,
  contentWrap,
  footerArea,
  likeWrap,
  tagWrap
};
