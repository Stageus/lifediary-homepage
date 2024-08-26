// Npm
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
// Layer
import { useFetch, useCookie, useRoute } from "@shared/hook";
import { useMessage } from "@shared/store";

export const useGetDiaryList = () => {

    const [ fetchData, baseFetch ] = useFetch();
    const { cookieGet } = useCookie();
    const { diaryidx } = useParams();
    const { errorRoute } = useRoute();

    const [ isEnd, setIsEnd ] = useState(false);
    const pageNumRef = useRef( 1 );
    const [ diaryList, setDiaryList ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( false );

    const mapper = ( resData ) => {
        const resDataWrap = resData?.map( item => (
            {
             idx : item.idx,
			    imgContents : item.imgContents,
			    textContent : item.textContent,
			    likeCnt : item.likeCnt,
			    commentCnt : item.commentCnt,
			    createdAt : item.createdAt,
			    accountIdx : item.accountIdx,
			    nickname : item.nickname,
			    profileImg : item.profileImg,
			    isSubscribed : item.isSubscribed,
			    isLiked : item.isLiked,
			    isMine : item.isMine,
            }
        ));

        return resDataWrap;
    };

    const getDiaryList = ()=>{
        if ( isEnd ) return console.log("메인리스트 끝");
        setIsLoading( true );
        baseFetch(`diary?${diaryidx ? "startWith=" + diaryidx + "&" : ""}page=${pageNumRef.current}`, {}, cookieGet("token"));
    };

    useEffect(()=>{
        if ( !fetchData ) return;

        setIsLoading( false );
        const mapperData = mapper(fetchData.data);

        switch ( fetchData.status ) {
            case 200:
                pageNumRef.current = pageNumRef.current + 1;
                setDiaryList([...diaryList, ...mapperData]);
                break;

            case 400:
                useMessage("일기리스트를 불러올수 없습니다");
                break;

            case 404:
                setIsEnd(true);
                break;

            case 500:
                errorRoute(500, "서버에러로 일기리스트를 볼수없습니다.")
                break;
        }
    },[ fetchData ]);

    

    return [ getDiaryList, diaryList, isLoading];
}