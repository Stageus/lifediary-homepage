import { useState, useRef } from "react";

export const useOpenModal = () => {

    const [ isOpenModal, setIsOpenModal ] = useState( false );
    const isClickedRef = useRef(false);
    const onClickOpen = () => {
        setIsOpenModal( !isOpenModal );
        isClickedRef.current = true;
    }
    
    return { isOpenModal, onClickOpen, isClickedRef };
}