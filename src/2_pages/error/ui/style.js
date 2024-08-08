import styled from "styled-components";

const error = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100%;

    & > h1 {
        font-size: 50px;
    }

    & > img {
        width: 300px;
        height: 300px;
    }
`;

const btnWrap = styled.div`
    padding: 10px;
`;

export const S = {
    error,
    btnWrap,
}