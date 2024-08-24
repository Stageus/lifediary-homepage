import styled from "styled-components";

const Aside = styled.div`
    min-height: 100%;
    background-color: ${({theme})=> theme.minor};
    display: flex;
    flex-direction: column;
`;

const BtnList = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const BtnWrap = styled.div`
    border-radius: 5px;
    box-shadow: 2px 2px 3px gray;
`;

const SubscribeListWrap = styled.div`
    height: 700px;
`;

export const S = {
    Aside,
    BtnList,
    BtnWrap,
    SubscribeListWrap,
}