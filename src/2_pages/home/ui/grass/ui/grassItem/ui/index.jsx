// Slice
import { S } from "./style";
import { useHover } from "../model/useHover";
import { findFirstDay } from "../lib/findFirstDay";
// Layer
import { useRoute } from "@shared/hook";
import { parseTime } from "@shared/util";

export const GrassItem = ( props )=>{

    const { idx, color, date } = props.day ?? {};
    const { hover, onMuouserOver, onMouserOut } = useHover();
    const { diaryRoute } = useRoute();
    
    return(
        <>
        <S.GrassItem 
                $isColor={ color } 
                $date={ date }
                onMouseOver={ onMuouserOver }
                onMouseOut={ onMouserOut }
                onClick={ () => diaryRoute( idx ) }
            >
            { !color && "x"} 
            {findFirstDay( date ) 
            ? <S.Month>{ findFirstDay( date ) }</S.Month> 
            : null} 

            {hover 
            ? <S.HoverInfo>{ parseTime(date) }</S.HoverInfo> 
            : null}

        </S.GrassItem>
        </>
    );
};
