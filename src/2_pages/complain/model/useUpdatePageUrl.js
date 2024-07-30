import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const useUpdatePageUrl = () => {

    const [ searchParams, setSearchParams ] = useSearchParams();

    // 현재페이지 num
    const currentPage = () => +searchParams.get( "page" );

    // 페이지의 num을 클릭했을시
    const onClickNum = ( num ) => setSearchParams( { page: num } );

    // 왼쪽 화살표를 클릭시
    const onClickLeft = () => {
        if ( currentPage() === 1 ) return;
        setSearchParams( { page: currentPage() - 1 } );
    };

    // 오른쪽 화살표를 클릭했을시
    const onClickRight = ( lastNum ) => {
        if ( lastNum === +searchParams.get( "page" ) ) return;
        setSearchParams( { page: currentPage() + 1 } );
    };

    useEffect(() => {
        if ( !searchParams.size ) setSearchParams( { "page": 1 } );
    },[]);

    return { currentPage, onClickNum, onClickLeft, onClickRight };
}