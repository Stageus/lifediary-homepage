// Npm
import { useState } from "react";
// Layer 
import { commentValidation } from "@shared/consts/validation";

export const useValidation = () => {

    const [ isValidation, isSetValidation ] = useState( false );

    const validation = ( text ) => {
        const result = text.target.value;

        if ( !commentValidation( result ) ) {
            isSetValidation( false );
            return ;
        }
        isSetValidation( true );
    };

    return { isValidation, validation };
}