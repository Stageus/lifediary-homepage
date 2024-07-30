// Npm
import { useEffect, useState } from "react";
// Layer
import { useFetch, useCookie } from "@shared/hook";

export const useGetComment = ( diaryIdx ) => {

    const [ fetchData, baseFetch ] = useFetch();
    const { handleGetCookie } = useCookie();
    const [ pageNum, setPageNum ] = useState( 1 );
    const [ isLoading, setIsLoading ] = useState( false );
    const [ commentList, setCommentList ] = useState( null );
    const [ errorMessage, setErrorMessage ] = useState( null );

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
                    createAt : item.createAt,
                    reComment: null,
                }
            )
        );

        const overLap = [];

        for( let i = 0 ; i < resDataWrap.length ; i++ ){
            const current = resDataWrap[i];
            
            if ( current.isParent ) {
                overLap.push(current);

            } else {
                const parentIndex = overLap.length - 1;
                if ( overLap[parentIndex] && overLap[parentIndex].isParent ) {
                    overLap[parentIndex].reComment = current;
                }
            }
        };

        return overLap;
    };

    const getComment = () => {
        if ( errorMessage ) return;
        setIsLoading( true );
        baseFetch(`comment?page=${pageNum}&diaryIdx=${diaryIdx}`,{},handleGetCookie());
    };

    useEffect(()=>{
        getComment();
    },[])

    useEffect(()=>{
        if ( !fetchData ) return;
        setIsLoading( false );

        switch ( fetchData.status ) {
            case 200:

                const mapperData = mapper( fetchData.data );
                setPageNum( pageNum + 1 );
                if ( !commentList ) return setCommentList( {
                    count: fetchData.data.length,
                    data: mapperData,
                } );
                setCommentList( {
                    count: commentList.count + fetchData.data.length,
                    data: [...commentList.data, ...mapperData]
                } );
                break;

            case 400:
                console.log("유효성 검사 실패일 경우");
                break;

            case 404:
                setErrorMessage( "더 이상 일기의 리소스가 없을경우" );
                break;

            case 500:
                console.log("서버에러");
                break;

        }
    },[fetchData]);

    return [ getComment, commentList, isLoading, errorMessage ];
}