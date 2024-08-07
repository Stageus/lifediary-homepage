import styled from "styled-components";

const notFound = styled.div`
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

    & > span {
        
    }
`;

export const S = {
    notFound,
}