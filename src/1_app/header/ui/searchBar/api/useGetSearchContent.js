import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useFetch, useCookie } from "@shared/hook";

export const useGetSearchContent = () => {
  const [tags, setTags] = useState([]);
  const [fetchData, baseFetch] = useFetch();
  const { handleGetCookie } = useCookie();

  const getSearchContent = () => {
    const searchParams = new URLSearchParams();
    searchParams.append("tags", tags.join("&"));
    baseFetch(`diary/search?${searchParams.toString()}`, {}, handleGetCookie());
  };

  useEffect(() => {
    if (tags !== "") {
      getSearchContent();
    }
  }, [tags]);

  useEffect(() => {
    if (fetchData?.status === 200) {
    }
  }, []);

  return [tags, setTags, getSearchContent];
};
