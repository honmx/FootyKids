import { useEffect, useState } from "react";

export const useRequest = <T>(requestFn: () => Promise<T>, defaultValue: T) => {
  
  const [data, setData] = useState<T>(defaultValue);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const data = await requestFn();
        setData(data);

      } catch (error: any) {
        setError(error.message)
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { data, setData, isLoading, error };
}