import styled from "styled-components";

const ComplainAlarm = styled.div`
    width: 100%;
    position: relative;

`;
const Alarm = styled.div`
    background-color: ${({theme})=> theme.highlight};
    border-radius: 50%;
    position: absolute;
    top: -10px;
    right: -10px;
    padding: 1px;
    display: flex;
`;

export const S = {
    ComplainAlarm,
    Alarm,
}