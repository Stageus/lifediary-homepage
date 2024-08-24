// Npm
import { useEffect, useState } from "react";
// Layer
import { useFetch, useCookie } from "@shared/hook";


export const useGetCommentList = ( diaryIdx ) => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const [ commentList, setCommentList ] = useState( null );
    
    const mapper = ( resData ) => {
        const resDataWrap = resData.map( item =>
            (
                {
                    idx : item.idx,
                    profileImg : item.profileImg,
                    nickname : item.nickname,
                    textContent : item.textContent,
                    isParent : item.isParent,
                    isMine : item.isMine,
                    createdAt : item.createdAt,
                    isReplied: item.isReplied,
                }
            )
        );
        return resDataWrap;
    };

    const getCommentList = () => {
        baseFetch(`comment?page=${1}&diaryIdx=${diaryIdx}`,{},cookieGet("token"));
    };

    useEffect(()=>{
        getCommentList();
    },[])

    useEffect(()=>{
        if ( !fetchData ) return;

        switch ( fetchData.status ) {
            case 200:
                const mapperData = mapper( fetchData.data );
                setCommentList( prevState => prevState ? [...prevState, ...mapperData] : [...mapperData]);
                break;

            case 400:
                setErrorMessage("400 잠시후에 다시 시도해주세요");
                break;

            case 404:
                // 댓글이 없는경우와, diaryIdx가 없는경우가 같은 상태코드 이므로
                // 잠시보류
                // setErrorMessage("존재하지 않는 일기입니다.");
                break;

            case 500:
                setErrorMessage("500 잠시후에 다시 시도해주세요");
                break;

        }
    },[fetchData]);

    return [ getCommentList, commentList];
}