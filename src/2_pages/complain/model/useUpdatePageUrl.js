import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export const useUpdatePageUrl = () => {

    const [ searchParams, setSearchParams ] = useSearchParams();
    const navigate = useNavigate();

    const currentPage = () => searchParams.get( "page" );

    const onClickNum = ( num ) => setSearchParams( { page: num } );

    const onClickLeft = () => navigate( -1 );

    const onClickRight = ( lastNum ) => {

        if ( lastNum === +searchParams.get( "page" ) ) return;
        setSearchParams( { page: +searchParams.get( "page" ) + 1 } );
    };

    useEffect(() => {

        if ( !searchParams.size ) setSearchParams( { "page": 1 } );

    },[])

    return { currentPage, onClickNum, onClickLeft, onClickRight };
}