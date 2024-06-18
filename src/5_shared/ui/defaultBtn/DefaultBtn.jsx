import { S } from "./style";

export const DefaultBtn = ( props )=>{
    const { text="button", px, py, fontSize, type, onClick = null } = props;
    return(
        <>
            <S.DefaultBtn 
            type={type}
            px={px}
            py={py}
            fontSize={fontSize}
            onClick={ type !== 'disabled' ? ()=>onClick() : null}
            >{text}</S.DefaultBtn>
        </>
    );
}