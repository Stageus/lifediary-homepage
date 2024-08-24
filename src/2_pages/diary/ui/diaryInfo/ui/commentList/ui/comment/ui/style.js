import styled from "styled-components";

const comment = styled.div`
    padding: 5px;
    width: 100%;
    display: flex;
    gap: 12px;
`;

const imgArea = styled.div`
    width: 34px;
    height: 34px;
    border-radius: 50%;
    overflow: hidden;
    
`;

const contentsArea = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 5px; 
`;

const contents = styled.div`
    white-space: pre-wrap;
    display: flex;
`;


const contentsInfo = styled.div`
    display: flex;
    gap: 10px;
    color: ${( {theme} ) => theme.gray};
    font-size: ${( {theme} ) => theme.fontSize.medium};
`;

const editorBtnListWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${( {theme} ) => theme.highlight};
    font-size: ${( {theme} ) => theme.fontSize.medium};
    & > span {
        cursor: pointer;
    }
`;

const inputArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const inputWrap = styled.div`
    display: flex;
    gap: 8px;
`;

const lineInput = styled.input`
    width: 0;
    border: none;
    outline: none;
    border-bottom: 1px solid black;
    border-radius: 1px;
    background-color: transparent;
    height: 34px;

    @keyframes growLine {
    from {
      width: 0;
    }
    to {
      flex-grow: 1;
    }
  }
    animation: growLine 0.5s ease-in-out forwards;
    animation-delay: 0.01s; /* 1초 후에 애니메이션 시작 */
`;

const editorBtnArea = styled.div`
   align-self: end;
   display: flex;
   gap: 10px;
    color: ${( {theme} ) => theme.highlight};
    font-size: ${( {theme} ) => theme.fontSize.base};
    & > span {
        cursor: pointer;
    }
`; 


export const S = {
    comment,
    imgArea,
    contentsArea,
    contentsInfo,
    editorBtnListWrap,
    contents,
    inputArea,
    inputWrap,
    lineInput,
    editorBtnArea,
};