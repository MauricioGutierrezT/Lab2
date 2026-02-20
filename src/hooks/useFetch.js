import { useEffect, useState } from "react";

export const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {

    setIsLoading(true);
    setHasError(null); // 🔥 RESET ERROR EVERY TIME URL CHANGES

    fetch(url)
      .then(resp => {
        if (!resp.ok) {
          throw new Error("Error fetching data");
        }
        return resp.json();
      })
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(error => {
        setHasError(error.message);
        setIsLoading(false);
      });

  }, [url]);

  return { data, isLoading, hasError };
};
