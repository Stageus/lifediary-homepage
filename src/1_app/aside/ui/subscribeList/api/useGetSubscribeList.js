// Npm
import { useEffect, useState } from "react";
// Layer
import { useFetch, useCookie, useRoute, useScroll } from "@shared/hook";
import { useMessage, useSubscribe } from "@shared/store";


export const useGetSubscribeList = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const { errorRoute } = useRoute();
    const setMessage = useMessage( state => state.setMessage );
    const updateSubscribe = useSubscribe( state => state.updateSubscribe );
    const [ watchRef, pageNum, stopObserver ] = useScroll();
    const [ isLoading, setIsLoading ] = useState( false ); 

    const mapper = ( resData ) => {
        const mapperWrap = resData?.map( data => (
            {
                accountIdx : data.toAccountIdx,
                profileImg : data.profileImg,
                nickname : data.nickname
            }
        ));
        return mapperWrap;
    };

    const getSubscribeList = ()=>{
        setIsLoading( true );        
        baseFetch(`subscription?page=${pageNum}`,{}, cookieGet("token"));
    };

    useEffect(()=>{
        getSubscribeList();
    },[pageNum])

    useEffect(()=>{
        if ( !fetchData ) return;

        setIsLoading( false );
        const mapperData = mapper( fetchData.data );

        switch ( fetchData.status ) {
            case 200:         
                updateSubscribe(mapperData);
                break;
                
            case 400:
                setMessage("구독자 목록을 불러올수 없습니다.");
                break;

            case 401:
                setMessage("구독자 목록을 불러올수 없습니다. \n다시로그인해주세요");
                break;

            case 404:
                stopObserver();
                break;

            case 500:
                errorRoute(500, "서버에러");
                break;
        }

    },[ fetchData ]);

    return [ isLoading, watchRef];
}