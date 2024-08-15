// Npm
import { useState } from "react";
// Layer
import { imgValidation } from "@shared/consts/validation";
import { useMessage } from "@shared/store";

export const useProfileImg = ( urlImg ) => {
    
    const [ selectImg, setSelectImg ] = useState( null );
    const [ previewImg, setPreviewImg ] = useState( urlImg );
    const setMessage = useMessage( state => state.setMessage );
    const onClickImg = ( e ) => {
    
        const imgCheckValidation = imgValidation( e.target.files[0] );

        if ( !imgCheckValidation ) {
            setMessage(`이미지확장자: JPG, JPEG, GIF, PNG
                이미지크기: 10M 이하`);
            return;
        }
        
        const previewUrl = URL.createObjectURL(e.target.files[0]);
        setPreviewImg(previewUrl);
        setSelectImg( e.target.files[0] );
    };

    const onClickReset = () => {
        setPreviewImg(urlImg);
        setSelectImg( null );
    };

    return { selectImg, previewImg, onClickImg, onClickReset };

};