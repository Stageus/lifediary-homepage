import { useState } from "react";
import { usePostComplain } from "../api/usePostComplain";

export const useModel = ( ) => {

    const [ isOpenModal, setIsOpenModal ] = useState( false );
    const [ isText, SetIsText ] = useState( null );
    const onClickModal = () => setIsOpenModal( !isOpenModal );
    const [ postComplain ] = usePostComplain();

    const onClickSubmit = ( diaryidx ) => {
        if ( !isText ) return;
        postComplain( diaryidx, isText );
        onClickModal();
        SetIsText( null );
    }

    const validation = ( text ) => {
        const regex = /^.{5,300}$/;
        const result = text.target.value;

        if ( !regex.test( result ) ) return SetIsText( false );
        
        SetIsText( result );
    };

    return { isOpenModal, isText, onClickModal, validation, onClickSubmit};
}