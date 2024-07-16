import { S } from "./style";

export const DefaultBtn = ( props )=>{
    const { text="base", size, type, onClick = null } = props;
    return(
        <>
            <S.DefaultBtn 
            type={type}
            size={size}
            onClick={ type !== 'disabled' ? ()=>onClick() : null}
            >{text}</S.DefaultBtn>
        </>
    );
}