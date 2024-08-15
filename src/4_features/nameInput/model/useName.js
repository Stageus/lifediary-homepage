// Npm
import { useEffect, useRef, useState } from "react";
// Layer
import { nameValidation } from "@shared/consts/validation";

export const useName = ( props ) => {

    const { name, setName } = props;
    const nameRef = useRef( null );
    const [ isValid, setIsValid ] = useState( false );

    const onChangeName = ( e ) => {
        const targetValue = e.target.value;

        if ( name !== targetValue ) setName(null);
        
        if ( !nameValidation(targetValue) ){
            setIsValid( false );
            return;
        };
        setIsValid( true );
    };

    useEffect(()=>{

        if ( nameRef.current && nameValidation( nameRef.current.value ) ){
            setIsValid( true );
        }

    },[]);

    return { isValid, nameRef, onChangeName };
};