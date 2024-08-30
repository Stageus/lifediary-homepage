import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useOpenModal = () => {

    const [ isOpenModal, setIsOpenModal ] = useState( false );
    const isClickedRef = useRef(false);
    const loaction = useLocation();
    
    const onClickOpen = () => {
        setIsOpenModal( !isOpenModal );
        isClickedRef.current = true;
    };

    useEffect(()=>{
        setIsOpenModal(false);
    },[loaction.pathname])

    
    
    return { isOpenModal, onClickOpen, isClickedRef };
}