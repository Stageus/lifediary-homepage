// Npm
import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
// Layer
import { useFetch } from "@shared/hook/useFetch";
import { useMessage } from "@shared/store";
import { useRoute } from "@shared/hook";
import { tagValidation } from "@shared/consts/validation";

export const useGetSearchList = () => {
  
  const [ fetchData, baseFetch ] = useFetch();
  const { errorRoute, backRoute } = useRoute();
  const [ searchParams ] = useSearchParams();
  const setMessage = useMessage((state) => state.setMessage);

  const [ diaryList, setDiaryList ] = useState([]);
  const pageNumRef = useRef(1);
  const [ isLoading, setIsLoading ] = useState( false );
  const [ isEnd, setIsEnd ] = useState(false);

  const mapper = (resData) => {
    const mapperData = resData?.map((obj) => ({
      idx: obj.idx,
      thumbnailImg: obj.thumbnailImg,
      textContent: obj.textContent,
      accountIdx: obj.accountIdx,
      nickname: obj.nickname,
      profileImg: obj.profileImg,
      likeCnt: obj.likeCnt,
      createdAt: obj.createdAt,
      tags: [...obj.tags],
    }));
    return mapperData;
  };

  const getSearchList = ( newSearch ) => {
    if ( isEnd ) return;
    setIsLoading(true);
    const decodedTags = searchParams.get("tags");

    // 태그가 입력되지 않았을경우
    if (!decodedTags) {
      baseFetch(`diary/search?page=${pageNumRef.current}&tags=""`);
      return;
    }

    // 서버요청전에 유효성검사
    const checkTags = decodedTags.split(",");
    const isRegex = checkTags.some((tag) => !tagValidation(tag));

    if ( isRegex ) {
      setMessage("사용할수 없는태그가 존재합니다.", backRoute);
      return;
    }

    const tagsWrap = checkTags
      .map((tag) => `&tags=${decodeURIComponent(tag)}`)
      .join("");
    baseFetch(`diary/search?page=${ newSearch ?? pageNumRef.current}${tagsWrap}`);
  };

  useEffect(() => {
    getSearchList(1);
    setDiaryList([]);
    setIsEnd(false);
    pageNumRef.current = 1;
  }, [searchParams]);

  useEffect(() => {
    if ( !fetchData ) return;

    const mapperData = mapper(fetchData.data);
    setIsLoading(false);
    // console.log("search:",mapperData)

    switch (fetchData.status) {
      case 200:    
        pageNumRef.current = pageNumRef.current + 1;
        setDiaryList([...diaryList, ...mapperData]);
        break;

      case 400:
        setMessage("잘못된 요청입니다.");
        break;

      case 404:

        if ( diaryList.length > 0 ) {
          setIsEnd(true);
        }
        break;

      case 500:
        errorRoute(500, "서버에러");
        break;
    }
  }, [fetchData]);

  return [getSearchList, diaryList, isLoading ];
};
