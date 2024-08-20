import { useState } from "react";

export const useColor = ( color ) => {
    const [ selectColor, setSelectColor ] = useState( color );
    
    const changeColor = (e) => {
        setSelectColor( e.target.value );
    };
    
    const randomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        setSelectColor( color );
    };

    return { selectColor, changeColor, randomColor }; 
}