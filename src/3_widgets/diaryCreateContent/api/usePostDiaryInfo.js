import { useFetch, useCookie } from "@shared/hook";

export const usePostDiaryInfo = (imgContents, textContent, tags, isPublic, color) => {
  const [data, errorStatus, baseFetch] = useFetch();
  const { handleGetCookie } = useCookie();

  const postDiaryInfo = () => {
    const data = {
      imgContents,
      textContent,
      tags,
      isPublic,
      color,
    };

    baseFetch(
      "diary",
      {
        method: "POST",
        data: data,
      },
      handleGetCookie()
    );
  };

  return [postDiaryInfo];
};
