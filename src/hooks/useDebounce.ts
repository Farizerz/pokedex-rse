import { useState, useEffect } from "react";

export const useDebounce = (val: string, delay: number) => {
  const [debounce, setDebounce] = useState(val);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounce(val), delay);

    return () => clearTimeout(timeout);
  }, [val, delay]);

  return debounce;
};
