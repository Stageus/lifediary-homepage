import { useFetch, useCookie } from "@shared/hook";

export const usePutDiaryInfo = (imgContents, textContent, tags, isPublic, color) => {
  const [data, errorStatus, baseFetch] = useFetch();
  const { handleGetCookie } = useCookie();

  const putDiaryInfo = () => {
    const data = {
      imgContents,
      textContent,
      tags,
      isPublic,
      color,
    };

    baseFetch(
      "diary/:diaryIdx",
      {
        method: "PUT",
        data: data,
      },
      handleGetCookie()
    );
  };

  return [putDiaryInfo];
};
