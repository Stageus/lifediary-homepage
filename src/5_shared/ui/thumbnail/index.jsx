import { useState, useEffect } from "react";
import { S } from "./style";
import loadingImg  from "../../assets/img/loading.gif";
import preparingImg from "../../assets/img/defaultDiary.jpg";

export const Thumbnail = (props)=>{
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { src } = props;
    
    useEffect(()=>{
        const img = new Image();
        img.onload = ()=>{
            setLoading(false);
            setError(false);
        }
        img.onerror = ()=>{
            setLoading(false);
            setError(true);
        }
        img.src = src;
    },[src])

    return(
        <>
        {/* 로딩중일 때의 이미지*/}
        {loading && <S.ImgCustom src={loadingImg} alt="Loading ..."/>}
        {/* 에러가 발생했을때의 이미지 */}
        {error && <S.ImgCustom src={preparingImg} alt="Error..."/>}
        {/* 로딩중도 아니고 에러도 아닐때는 원래이미지 */}
        {!loading && !error && <S.ImgCustom src={src} alt="Diary ..."/>}
        </>
    );
}




