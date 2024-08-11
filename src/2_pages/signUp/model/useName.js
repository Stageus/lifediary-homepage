// Npm
import { useEffect, useRef, useState } from "react";
// Layer
import { nameValidation } from "@shared/consts/validation";

export const useName = ( checkedHandelr ) => {

    const [ checkName, setCheckName ] = useState( false );
    const nameRef = useRef( null );

    const onChangeName = ( e ) => {
        const targetValue = e.target.value;
        checkedHandelr();
        
        if ( !nameValidation(targetValue) ){
            setCheckName(false);
            return;
        };
        setCheckName(true);
    };

    useEffect(()=>{

        if ( nameRef.current && nameValidation(nameRef.current.value)){
            setCheckName(true);
        }

    },[]);

    return { checkName, nameRef, onChangeName };
};