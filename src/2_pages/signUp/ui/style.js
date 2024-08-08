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
`;

const logoArea = styled.div`
    width: fit-content;

    & > img {
        border-radius: 8px;
        width: 250px;
    }
`;

const profileArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`;

const imgWrap = styled.div`
    width: 100px;
`;

const profileGuide = styled.span`
    color: red;
    font-size: 14px;
`;

const nameArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const nameInout = styled.input`
    width: 200px;
    padding: 10px;
    border-radius: 8px;
    border: 2px solid ${({theme}) => theme.major};
    font-size: 12px;
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
    profileGuide,
    nameArea,
    nameInout,
    nameGuide,
    btnArea,
};