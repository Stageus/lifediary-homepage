// Npm
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// Layer
import { useFetch } from "@shared/hook/useFetch";
import { useMessage } from "@shared/store";
import { useRoute } from "@shared/hook";
import { tagValidation } from "@shared/consts/validation";

export const useGetSearchList = () => {
  
  const [diaryList, setDiaryList] = useState(null);
  const [fetchData, baseFetch] = useFetch();
  const [pageNum, setPageNum] = useState(1);
  const [searchParams] = useSearchParams();
  const setMessage = useMessage((state) => state.setMessage);
  const [errorMessage, setErrorMessage] = useState(null);
  const { errorRoute, backRoute } = useRoute();
  const [isEnd, setIsEnd] = useState(false);

  const mapper = (resData) => {
    const mapperData = resData.map((obj) => ({
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

  const getSearchList = () => {
    const decodedTags = searchParams.get("tags");

    // 태그가 입력되지 않았을경우
    if (!decodedTags) {
      baseFetch(`diary/search?page=${pageNum}&tags=""`);
      return;
    }

    // 서버요청전에 유효성검사
    const checkTags = decodedTags.split(",");
    const isRegex = checkTags.some((tag) => !tagValidation(tag));

    if (isRegex) {
      setMessage("사용할수 없는태그가 존재합니다.", backRoute);
      return;
    }

    const tagsWrap = checkTags
      .map((tag) => `&tags=${decodeURIComponent(tag)}`)
      .join("");
    baseFetch(`diary/search?page=${pageNum}${tagsWrap}`);
  };

  useEffect(() => {
    /*
      초기렌더링시와, searchParams가 변경될때마다 해당구문을 실행한다
      새로운 태그가 입력되면 값을 초기화하고, 다시요청한다
    */
    setPageNum(1);
    setDiaryList(null);
    setIsEnd(false);
    setErrorMessage(null);
  }, [searchParams]);

  useEffect(() => {
    if (!fetchData) return;

    switch (fetchData.status) {
      case 200:
        /*
          첫 검색시(즉,pageNum 1일때) diaryList null이기때문에 그대로할당
          pageNum 1이 아닐때는 두번째요청이므로 기존 데이터와 병합
          state의 초기값을 null아닌 []배열로 할당하면 좋을듯
        */
        if (pageNum === 1) {
          setDiaryList(mapper(fetchData.data));
        } else {
          setDiaryList([...diaryList, ...mapper(fetchData.data)]);
        }

        if (fetchData.data.length >= 10) {
          setPageNum(pageNum + 1);
        } else {
          setIsEnd(true);
        }

        // 특정검색 태그가 없고, 다른태그를 입력시 존재한다면 메세지를 초기화
        setErrorMessage(null);
        break;

      case 400:
        setMessage("잘못된 요청입니다.");
        break;

      case 404:
        /*
          pageNum이 1일때 404라면 일치하는 태그가 없기에 메세지를 보여줌
          1일아닐경우에는 두번째 요청이므로 메세지를 초기화
        */
        //  search에서 데이터의 유무로 한다면 굳이 작성할 필요가 없을듯
        if (pageNum === 1) {
          setErrorMessage("등록된 일기가 존재하지 않습니다");
        } else {
          setErrorMessage(null);
        }

        // 데이터의 끝을 알림
        setIsEnd(true);
        break;

      case 500:
        errorRoute(500, "서버에러");
        break;
    }
  }, [fetchData]);

  return [isEnd, getSearchList, diaryList, errorMessage];
};
