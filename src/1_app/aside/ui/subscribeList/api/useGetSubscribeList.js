// Npm
import { useEffect, useState } from "react";
// Layer
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { useMessage, useSubscribe } from "@shared/store";


export const useGetSubscribeList = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const { errorRoute } = useRoute();
    const setMessage = useMessage( state => state.setMessage );
    const updateSubscribe = useSubscribe( state => state.updateSubscribe );

    const [ pageNum, setPageNum ] = useState(1); 
    const [ subscribeList, setSubscribeList ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( false ); 
    const [ isEnd, setIsEnd ] = useState( false );

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

    /*
        여기가 문제가 있음
        무한스크롤 과 전역상타에 따라 함수를 호출해야한다.
        문제는, 경우의 수때문인데, 전역상태관리가 바뀌면,
        해당함수를 호출해야하는데, 일반적으로 호출하기때문에,
        pageNum의 값은 undefined 인데....
    */
    const getSubscribeList = ( pageNum )=>{
        setIsLoading( true );
        const page = pageNum ?? 1;
        baseFetch(`subscription?page=${page}`,{}, cookieGet("token"));
    };

    useEffect(() => {
        if ( !subscribeList.length ) {
            getSubscribeList();
        }
    },[]);

    

    useEffect(()=>{
        if ( !fetchData ) return;

        setIsLoading( false );
        const mapperData = mapper( fetchData.data );

        switch ( fetchData.status ) {
            case 200:
                // console.log(mapperData);
                // setSubscribeList(mapperData);            
                updateSubscribe(mapperData)
                break;
                
            case 400:
                setMessage("구독자 목록을 불러올수 없습니다.");
                break;

            case 401:
                setMessage("구독자 목록을 불러올수 없습니다. \n다시로그인해주세요")
                break;

            case 404:
                if ( subscribeList && !mapperData ) {
                    setSubscribeList(null);
                }
                break;

            case 500:
                errorRoute(500, "서버에러");
                break;
        }

    },[ fetchData ]);

    return [ getSubscribeList, subscribeList, isLoading, isEnd];
}