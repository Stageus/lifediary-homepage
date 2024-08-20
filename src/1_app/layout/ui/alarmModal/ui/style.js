import styled from "styled-components";

const AlarmModal = styled.div`
    width: fit-content;
    padding: 10px 40px;
    background-color: ${( {theme} ) => theme.highlight };
    color: ${( {theme} ) => theme.white };
    position: fixed;
    bottom: 20px;
    border-radius: 6px;
    transform: translateX(10%);
`;

export const S = {
    AlarmModal,
}