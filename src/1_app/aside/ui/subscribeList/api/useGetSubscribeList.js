// Npm
import { useEffect, useState } from "react";
// Layer
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { useSubscribe, useMessage } from "@shared/store";


export const useGetSubscribeList = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const [ subscribeList, setSubscribeList ] = useState( null );
    const [ isLoading, setIsLoading ] = useState( false ); 
    const isSubscribe = useSubscribe( state => state.value );
    const [ pageNum, setPageNum ] = useState(1);
    const [ isEnd, setIsEnd ] = useState( false );
    const { errorRoute } = useRoute();
    const setMessage = useMessage( state => state.setMessage );

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
        setIsLoading( true );
        baseFetch(`subscription?page=${pageNum}`,{}, cookieGet("token"));
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
                break;
                
            case 400:
                setMessage("구독자 목록을 불러올수 없습니다.")
                break;

            case 401:
                setMessage("구독자 목록을 불러올수 없습니다. \n다시로그인해주세요")
                break;

            case 404:
                setIsEnd( true );
                break;

            case 500:
                errorRoute(500, "서버에러");
                break;
        }

    },[ fetchData ]);

    return [ getSubscribeList, subscribeList, isLoading, isEnd];
}