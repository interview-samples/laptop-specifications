import { useState, useEffect } from "react";

export default function usePromiseHook<T>(
  promise: Promise<T>
): [boolean, boolean, T | null] {
  const [isPending, setIsPending] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const awaitPromise = async () => {
      setHasError(false);
      setData(null);
      setIsPending(true);

      try {
        const data = await promise;
        setData(data);
      } catch {
        setHasError(true);
      } finally {
        setIsPending(false);
      }
    };

    awaitPromise();
  }, [promise]);

  return [isPending, hasError, data];
}
