import { useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [errorStatus, setErrorStatus] = useState(null);

  const baseFetch = async (url, options, token) => {
    try {
      const { method = "GET", headers = "aplication/json", data = null } = options ?? {};

      const requestInfo = {
        method,
        headers: {
          "Content-Type": headers,
          ...(token && { token: token }),
        },
        ...(data && {
          body: data instanceof FormData ? data : JSON.stringify(data),
        }),
      };

      const response = await fetch(`${import.meta.env.VITE_API_URL}/${url}`, { ...requestInfo });

      if (!response.ok) {
        setErrorStatus(response.status);
        return;
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      setErrorStatus(error);
    }
  };

  return [data, errorStatus, baseFetch];
};
