import { useRef, useState } from "react";
import { complainContentValidation } from "@shared/consts/validation";

export const useValidation = () => {

    const complainTextRef = useRef( null );
    const [ isValidation, isSetValidation ] = useState( false );

    const onChangeCheck = ( text ) => {
        
        const result = text.target.value;
        if ( !complainContentValidation(result) ) {
            isSetValidation( false );
            return ;
        }
        isSetValidation( true );
    };

    return { complainTextRef, isValidation, onChangeCheck }
}