import { useRef, useState } from "react";

export const useValidation = () => {

    const complainTextRef = useRef( null );
    const [ isValidation, isSetValidation ] = useState( false );

    const validation = ( text ) => {
        const regex = /^.{5,300}$/;
        const result = text.target.value;

        if ( !regex.test( result ) ) {
            isSetValidation( false );
            return ;
        }
        isSetValidation( true );
    };

    return { complainTextRef, isValidation, validation }
}