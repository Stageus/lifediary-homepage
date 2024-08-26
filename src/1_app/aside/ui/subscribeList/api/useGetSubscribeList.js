// Npm
import { useEffect, useState, useRef } from "react";
// Layer
import { useFetch, useCookie, useRoute,  } from "@shared/hook";
import { useMessage, useSubscribe } from "@shared/store";


export const useGetSubscribeList = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const { errorRoute } = useRoute();
    const setMessage = useMessage( state => state.setMessage );
    const updateSubscribe = useSubscribe( state => state.updateSubscribe );

    const [ isEnd, setIsEnd ] = useState(false);
    const pageNumRef = useRef(1);
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
        if ( isEnd ) return console.log("구독리스트 끝");
        setIsLoading( true );
        baseFetch(`subscription?page=${pageNumRef.current}`,{}, cookieGet("token"));
    };


    useEffect(()=>{
        if ( !fetchData ) return;

        setIsLoading( false );
        const mapperData = mapper( fetchData.data );

        switch ( fetchData.status ) {
            case 200:
                pageNumRef.current = pageNumRef.current + 1;
                updateSubscribe(mapperData);
                break;
                
            case 400:
                setMessage("구독자 목록을 불러올수 없습니다.");
                break;

            case 401:
                setMessage("구독자 목록을 불러올수 없습니다. \n다시로그인해주세요");
                break;

            case 404:
                setIsEnd( true );
                break;

            case 500:
                errorRoute(500, "서버에러");
                break;
        }

    },[ fetchData ]);

    return [ getSubscribeList, isLoading ];
}