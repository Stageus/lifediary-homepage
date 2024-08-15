import styled from "styled-components";

const picker = styled.div`
    display: flex;
    align-items: center;
    border-radius: 8px;
  
  .input_style{
    border: 3px solid ${({theme}) => theme.minor};
    border-radius: 8px;
    width: 210px;
  }
`;

export const S = {
  picker,
};
