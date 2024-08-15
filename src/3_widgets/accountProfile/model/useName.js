import { useState } from "react";

export const useName = () => {

    const [ name, setName ] = useState( null );
    const [ nameEdit, setNameEdit ] = useState(false);
    const onClickEdit = () => setNameEdit(!nameEdit);
    
    return { name, setName, nameEdit, onClickEdit };
};