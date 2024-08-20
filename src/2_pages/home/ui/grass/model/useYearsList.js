import { useState } from "react";

export const useYearsList = () => {

    const [ selectYear, setSelectYear ] = useState( null );
    const nowYears = new Date().getFullYear();
    const yearsList = Array( 3 ).fill( nowYears ).map( ( value, idx ) => value - idx );
    const changeYear = ( year ) => setSelectYear(year);

    return { yearsList, selectYear, changeYear };
}