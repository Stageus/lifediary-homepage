import { useState } from "react";

export const useHover = () => {

    const [ hover, setHover ] = useState( false );
    const onMuouserOver = () => setHover( true );
    const onMouserOut = () => setHover( false );

    return { hover, onMuouserOver, onMouserOut }
};