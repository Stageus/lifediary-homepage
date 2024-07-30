import { useState } from "react";

export const useOpenModal = () => {
    
    const [ isOpenModal, setIsOpenModal ] = useState( false );
    const onClickModal = () => setIsOpenModal( !isOpenModal );

    return { isOpenModal, onClickModal };
}