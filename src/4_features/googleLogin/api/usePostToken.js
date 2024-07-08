import { useEffect } from "react";
import { useFetch } from "@shared/hook/useFetch";

export const usePostToken = (response, redirectData, navigate) => {
  const [responseData, errorStatus, baseFetch] = useFetch();

  useEffect(() => {
    if (response && redirectData) {
      const { credential } = response;
      baseFetch(redirectData.result.redirectUrl, {
        method: "POST",
        headers: {
          token: credential,
        },
      })
        .then(() => {
          if (!errorStatus) navigate("/home");
        })
        .catch((error) => console.log(error));
    }
  }, [response, redirectData, baseFetch, errorStatus, navigate]);
};
