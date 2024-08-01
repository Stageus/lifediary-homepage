import { useState } from "react";

export const useOpenModal = () => {

    const [ isOpenModal, setIsOpenModal ] = useState( false );
    const onClickOpen = () => setIsOpenModal( !isOpenModal );
    
    return { isOpenModal, onClickOpen };
}