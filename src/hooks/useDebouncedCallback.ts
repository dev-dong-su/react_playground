import {useCallback, useEffect} from "react";

interface IUseDebouncedCallback {
  (callback: () => void, delay: number): () => void;
}

export const useDebouncedCallback: IUseDebouncedCallback = (callback, delay) => {
  const debouncedCallback = useCallback(callback, [callback, delay]);

  useEffect(() => {
    const handler = setTimeout(() => {
      debouncedCallback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedCallback, delay]);

  return debouncedCallback;
}
