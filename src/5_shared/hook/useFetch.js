import { useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const baseFetch = async (url, options, token) => {
    try {
      const { method = "GET", headers = "aplication/json", data } = options;

      const requestInfo = {
        method,
        ...(headers ? { "Content-Type": headers } : {}),
        ...(data && {
          body: data instanceof FormData ? data : JSON.stringify(data),
        }),
        ...(token && { Authorization: `Bearer ${token}` }),
      };

      const response = await fetch(`${import.meta.env.VITE_API_URL}/${url}`, { ...requestInfo });

      if (!response.ok) {
        console.error(response.status);
        setError(response.status);
        return;
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err);
      console.error(err);
    }
  };

  return [data, error, baseFetch];
};
