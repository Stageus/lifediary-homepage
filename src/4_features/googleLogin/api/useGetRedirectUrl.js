import { useEffect } from "react";

import { useFetch } from "@shared/hook/useFetch";

export const useGetRedirectUrl = () => {
  const [redirectData, errorStatus, baseFetch] = useFetch();

  useEffect(() => {
    baseFetch("login/oauth/google");
    if (errorStatus) {
      console.log(`Error: ${errorStatus}`);
      return;
    }
  }, []);

  return [redirectData, ,];
};
