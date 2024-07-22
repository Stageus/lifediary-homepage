// Slice
import { S } from "./style";
import { useModel } from "../model/useModel";
import { findFirstDay } from "../lib/findFirstDay";

export const GrassItem = ( props )=>{

    const { idx, color, date } = props.day ?? {};
    const { hover, onMuouserOver, onMouserOut, onClickRoute } = useModel();

    return(
        <>
        {idx 
        ?( <S.GrassItem 
                $isExist={ color } 
                $date={ date }
                onMouseOver={ onMuouserOver }
                onMouseOut={ onMouserOut }
                onClick={ () => onClickRoute( idx ) }
            >
                
            {findFirstDay( date ) 
            ? <S.Month>{ findFirstDay( date ) }</S.Month> 
            : null} 

            {hover 
            ? <S.HoverInfo>{ date }</S.HoverInfo> 
            : null}
            </S.GrassItem>)

        : <S.GrassItem/>}
        </>
    );
};
