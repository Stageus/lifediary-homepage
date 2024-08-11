// Npm
import { useEffect, useState } from "react";
// Layer
import { useMessage } from "@shared/store";
import { imgValidation } from "@shared/consts/validation";
import { convertImageUrl } from "@shared/util";

export const useImg = ( imgContents ) => {

    const [ selectImg, setSelectImg ] = useState( null );
    const [ previewImg, setPreviewImg ] = useState( null );
    const setMessage = useMessage( state => state.setMessage );

    const onClickImg = ( e ) => {
        
        const imgCheckValidation = imgValidation( e.target.files[0] );
        if ( !imgCheckValidation ) {
            setMessage(`이미지확장자: JPG, JPEG, GIF, PNG
                이미지크기: 10M 이하`);
            return;
        }

        if ( selectImg.length === 3){
            setMessage(`이미지는 3개이상 등록할수 없습니다.`);
            return;
        }

        const previewUrl = URL.createObjectURL(e.target.files[0]);
        setPreviewImg( [...previewImg, previewUrl] );
        setSelectImg( [...selectImg, e.target.files[0]] );
    };

    const deleteImg = ( imgidx ) => {

        const deleteSelect = selectImg.filter( (_, idx) => idx !== imgidx);
        const deletePreview =  previewImg.filter( (_, idx) => idx !== imgidx);
        setSelectImg(deleteSelect)
        setPreviewImg(deletePreview);

    };

    useEffect(()=>{

        if ( imgContents ) {
            // URL을 File 객체로 변환
            ( async () => {
                try{
                    const files = await Promise.all(imgContents.map( url => convertImageUrl(url)));
                    setSelectImg(files);
                    setPreviewImg(imgContents);
                }catch(error){

                }
            })();
        }

    },[])

    return { selectImg, previewImg, onClickImg, deleteImg };
}