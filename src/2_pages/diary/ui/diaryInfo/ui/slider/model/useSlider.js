import { useState } from "react";

export const useSlider = ( listLength )=>{
    const [ positionUnit, setPositionUnit ] = useState( 0 );

    const onClickLeft = () => {
        if ( positionUnit === 0 ) return;
        setPositionUnit( positionUnit + 1 );
    };

    const onClickRight = () => {
        if ( -positionUnit === listLength - 1 ) return;
        setPositionUnit( positionUnit - 1 );
    };

    const onClickNumber = ( number ) => {
        console.log(number)
        setPositionUnit( number );
    }

    return { positionUnit, onClickLeft, onClickRight, onClickNumber };
}