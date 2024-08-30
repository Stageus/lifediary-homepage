// Npm
import { useEffect, useState, useRef } from "react";
// Layer
import { useFetch, useCookie } from "@shared/hook";


export const useGetCommentList = ( diaryIdx ) => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();

    const [ isEnd, setIsEnd ] = useState( false );
    const [ isLoading, setIsLoading ] = useState( false );
    const pageNumRef = useRef(1);
    const [ commentList, setCommentList ] = useState( [] );
    
    const mapper = ( resData ) => {
        const resDataWrap = resData?.map( item =>
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
        if ( isEnd ) return;
        setIsLoading(true);
        baseFetch(`comment?page=${pageNumRef.current}&diaryIdx=${diaryIdx}`, {}, cookieGet("token"));
    };


    useEffect(()=>{
        if ( !fetchData ) return;

        const mapperData = mapper( fetchData.data );
        setIsLoading(false);

        switch ( fetchData.status ) {
            case 200:
                pageNumRef.current = pageNumRef.current + 1;
                setCommentList([...commentList, ...mapperData]);
                break;

            case 400:
                setErrorMessage("400 잠시후에 다시 시도해주세요");
                break;

            case 404:
                setIsEnd(true);
                break;

            case 500:
                setErrorMessage("500 잠시후에 다시 시도해주세요");
                break;

        }
    },[fetchData]);

    return [ getCommentList, commentList, isLoading];
}