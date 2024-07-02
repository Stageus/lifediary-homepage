import { S } from "./style";

export const DefaultBtn = ( props )=>{
    const { text="base", fontSize, type, onClick = null } = props;
    return(
        <>
            <S.DefaultBtn 
            type={type}
            fontSize={fontSize}
            onClick={ type !== 'disabled' ? ()=>onClick() : null}
            >{text}</S.DefaultBtn>
        </>
    );
}