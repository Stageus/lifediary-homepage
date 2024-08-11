import { useState } from "react";

export const useToogle = ( isPublic ) => {
    const [ toggle, setToogle ] = useState( isPublic );
    const isToogle = () => {
        setToogle(!toggle)
    };

    return { toggle, isToogle };
}