import { S } from "./style";

export const DefaultBtn = ( props )=>{
    const { text="base", size, type, onClick = null, shadow = true} = props;
    return(
        <>
            <S.DefaultBtn 
            $type={type}
            $size={size}
            $shadow={shadow}
            onClick={ type !== 'disabled' ? ()=>onClick() : null}
            >{text}</S.DefaultBtn>
        </>
    );
}