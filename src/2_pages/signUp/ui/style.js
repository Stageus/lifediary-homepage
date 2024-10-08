import styled from "styled-components";

const signUp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const innerBox = styled.div`
    min-width: 525px;
    height: 600px;
    border: 4px solid ${({theme}) => theme.major};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    background-color: #c0c0c00a;
    padding: 100px;
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

const profileArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const imgWrap = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    display: flex;
    border-radius: 50%;
    overflow: hidden;

    & > label {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left:0;
        cursor: pointer;
    }

    & > input {
        display: none;
    }
`;

const imgGuide = styled.div`
    font-size: 14px;
    color: gray;
`;

const nameArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const nameWrap = styled.div`
    width: 100%;
    display: flex;
    border: 2px solid ${({theme}) => theme.major};
    border-radius: 8px;
    padding: 4px;
`;

const nameInput = styled.input`
    outline: none;
    border: none;
    padding: 8px;
    width: 100%;
    font-size: 12px;
`;

const checkBtn = styled.div`

`;

const nameGuide = styled.span`
    color: red;
    font-size: 14px;
`;

const btnArea = styled.div`
    display: flex;
    gap: 10px;
`;

export const S = {
    signUp,
    innerBox,
    logoArea,
    profileArea,
    imgWrap,
    imgGuide,
    nameArea,
    nameWrap,
    nameInput,
    checkBtn,
    nameGuide,
    btnArea,
};