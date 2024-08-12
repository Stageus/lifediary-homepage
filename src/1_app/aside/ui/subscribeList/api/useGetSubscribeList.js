// Npm
import { useEffect, useState } from "react";
// Layer
import { useFetch, useCookie } from "@shared/hook";
import { useSubscribe } from "@shared/store";


export const useGetSubscribeList = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const [ subscribeList, setSubscribeList ] = useState( null );
    const [ isLoading, setIsLoading ] = useState( false ); 
    const isSubscribe = useSubscribe( state => state.value );
    const [ errorMessage, setErrorMessage ] = useState( null );
    const [ pageNum, setPageNum ] = useState(1);

    const mapper = ( resData ) => {
        const subscribeList = resData.map( data => (
            {
                toAccountIdx : data.toAccountIdx,
                profileImg : data.profileImg,
                nickname : data.nickname
            }
        ));
        return subscribeList;
    };

    const getSubscribeList = ()=>{
        if ( errorMessage ) return;
        setIsLoading( true );
        // baseFetch(`subscription?page=${pageNum}`,{},cookieGet("token"));
    };

    useEffect(() => {
        getSubscribeList();
    },[isSubscribe]);
    

    useEffect(()=>{
        if ( !fetchData ) return;
        setIsLoading( false );

        switch ( fetchData.status ) {
            case 200:
                setPageNum( pageNum + 1);
                const mapperData = mapper( fetchData.data );

                if ( !subscribeList ) return setSubscribeList( mapperData );
                setSubscribeList([ ...subscribeList, ...mapperData ]);
                break
                
            case 400:
                // 재요청하는걸로
                console.log("유효성검사 실패");
                break

            case 401:
                // 회원에 대한 접근 안내로
                console.log("토큰이 잘못되거나 없는경우");
                break

            case 404:
                setErrorMessage("더이상 구독리스트가 존재하지 않아요")
                break

            case 500:
                // 500 페이지로
                console.log("서버에러");
                break

            default:
                console.log("예상하지 못한경우")
        }

    },[ fetchData ]);

    return [ getSubscribeList, subscribeList, isLoading, errorMessage ];
}