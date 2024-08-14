// Npm
import { useEffect, useState } from "react";
// Layer
import { useMessage } from "@shared/store";
import { imgValidation } from "@shared/consts/validation";

export const useImg = ( imgContents ) => {

    const [ selectImg, setSelectImg ] = useState([]);
    const [ previewImg, setPreviewImg ] = useState([]);
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

        if ( Array.isArray(previewImg) && previewImg.length >= 3 ) {
            setMessage(`이미지는 3개이상 등록할수 없습니다.`);
            return;
        }

        const previewUrl = URL.createObjectURL(e.target.files[0]);
        setPreviewImg([...previewImg, previewUrl]);
        setSelectImg([...selectImg, e.target.files[0]]);
    };

    const onClickDeleteImg = ( url, imgidx) => {

        // 일기작성시: selectImg, previewImg를 삭제
        const deletePreview =  previewImg.filter((_, idx) => idx !== imgidx);
        setPreviewImg(deletePreview);
        const deleteSelect = selectImg.filter((_, idx) => idx !== imgidx)
        setSelectImg(deleteSelect);

        // 일기수정시: deleteUrl을 저장
        if ( Array.isArray(imgContents) && !imgContents.length ){
            const deleteUrl = imgContents.filter( item => item === url);
            setDeleteUrlList([...deleteUrlList, ...deleteUrl]);
        }
    };

    useEffect(()=>{

        if ( imgContents ) {
            setPreviewImg( [...imgContents])
        };

    },[])

    return { selectImg, previewImg, deleteUrlList, onClickImg, onClickDeleteImg };
}