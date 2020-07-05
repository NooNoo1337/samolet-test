import { useState, useEffect } from "react";

export interface Response {
  data: any | null;
  loading: boolean;
  error: boolean;
}

export const useFetch = (
  url: string,
  isCalled: boolean,
  resolver?: (data: any) => any
): Response => {
  const [response, setResponse] = useState<Response>({
    data: null,
    loading: true,
    error: false,
  });

  useEffect(() => {
    if (!response.data && isCalled) {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            setResponse({
              data: resolver ? res.map(resolver) : res,
              loading: false,
              error: false,
            });
          }
        })
        .catch((err) => {
          console.error(err);
          setResponse({ data: null, loading: false, error: true });
        });
    }
  }, [isCalled, resolver, response.data, url]);

  return response;
};
