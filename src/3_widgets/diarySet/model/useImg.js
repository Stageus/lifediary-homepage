// Npm
import { useEffect, useState } from "react";
// Layer
import { useMessage } from "@shared/store";
import { imgValidation } from "@shared/consts/validation";

export const useImg = ( imgContents ) => {

    const [ selectImg, setSelectImg ] = useState([]);
    const [ deleteUrlList, setDeleteUrlList ] = useState([]);
    const setMessage = useMessage( state => state.setMessage );

    const onClickImg = ( e ) => {
        
        if ( !imgValidation(e.target.files[0]) ) {
            setMessage(`이미지확장자: JPG, JPEG, GIF, PNG\n이미지크기: 10M 이하`);
            return;
        }

        if ( Array.isArray(selectImg) && selectImg.length >= 3 ) {
            setMessage(`이미지는 3개이상 등록할수 없습니다.`);
            return;
        }
        setSelectImg([...selectImg, e.target.files[0]]);
    };

    const onClickDeleteImg = ( fileORurl ) => {

        const deleteSelect = selectImg.filter( item => item !== fileORurl);
        setSelectImg(deleteSelect);

        if ( Array.isArray(selectImg) && selectImg.length && typeof fileORurl === "string" ){
            setDeleteUrlList([...deleteUrlList, fileORurl]);
        }
    };

    useEffect(()=>{

        if ( imgContents ) {
            setSelectImg( [...imgContents])
        };

    },[])

    return { selectImg, deleteUrlList, onClickImg, onClickDeleteImg };
}